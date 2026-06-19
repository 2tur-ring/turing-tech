from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.schemas.user import (
    UserCreate, UserLogin, UserResponse, UserUpdate,
    TokenResponse, TokenRefresh,
)
from app.auth.utils import (
    hash_password, verify_password,
    create_access_token, create_refresh_token,
    decode_token,
)
from app.dependencies import get_current_user
from config import settings

router = APIRouter(prefix="/api/auth", tags=["Autenticação"])


@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
def register(data: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == data.email).first()
    if existing:
        raise HTTPException(status_code=409, detail="Email já registado")
    user = User(
        nome=data.nome,
        email=data.email,
        telefone=data.telefone,
        empresa=data.empresa,
        nif=data.nif,
        password_hash=hash_password(data.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return _build_token_response(user)


@router.post("/login", response_model=TokenResponse)
def login(data: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email).first()
    if not user or not verify_password(data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Email ou password incorrectos")
    if not user.is_active:
        raise HTTPException(status_code=403, detail="Conta desactivada")
    return _build_token_response(user)


@router.post("/refresh", response_model=TokenResponse)
def refresh(data: TokenRefresh, db: Session = Depends(get_db)):
    payload = decode_token(data.refresh_token)
    if not payload or payload.get("type") != "refresh":
        raise HTTPException(status_code=401, detail="Refresh token inválido")
    user = db.query(User).filter(User.id == payload.get("sub")).first()
    if not user or not user.is_active:
        raise HTTPException(status_code=401, detail="Utilizador não encontrado")
    return _build_token_response(user)


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user


@router.put("/me", response_model=UserResponse)
def update_me(data: UserUpdate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(current_user, field, value)
    db.commit()
    db.refresh(current_user)
    return current_user


@router.post("/google", response_model=TokenResponse)
def google_auth(data: dict, db: Session = Depends(get_db)):
    credential = data.get("credential")
    if not credential:
        raise HTTPException(status_code=400, detail="Token Google necessário")
    from google.oauth2 import id_token as google_id_token
    from google.auth.transport import requests as google_requests
    try:
        req = google_requests.Request()
        idinfo = google_id_token.verify_oauth2_token(credential, req, settings.google_client_id)
    except ValueError as e:
        raise HTTPException(status_code=401, detail=f"Token Google inválido: {e}")
    email = idinfo.get("email")
    nome = idinfo.get("name", (email or "").split("@")[0] if email else "Utilizador")
    if not email:
        raise HTTPException(status_code=400, detail="Email não fornecido pelo Google")
    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(nome=nome, email=email, password_hash="google_oauth", is_active=True)
        db.add(user)
        db.commit()
        db.refresh(user)
    if not user.is_active:
        raise HTTPException(status_code=403, detail="Conta desactivada")
    return _build_token_response(user)


def _build_token_response(user: User) -> TokenResponse:
    token_data = {"sub": user.id, "email": user.email, "role": user.role}
    return TokenResponse(
        access_token=create_access_token(token_data),
        refresh_token=create_refresh_token(token_data),
        user=UserResponse.model_validate(user),
    )
