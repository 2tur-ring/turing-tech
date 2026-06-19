from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.license import License
from app.models.user import User
from app.schemas.license import LicenseResponse, LicenseActivate
from app.dependencies import get_current_user

router = APIRouter(prefix="/api/licenses", tags=["Licenças"])


@router.get("", response_model=list[LicenseResponse])
def list_licenses(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(License).filter(License.user_id == current_user.id).all()


@router.get("/{license_id}", response_model=LicenseResponse)
def get_license(license_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    lic = db.query(License).filter(License.id == license_id, License.user_id == current_user.id).first()
    if not lic: raise HTTPException(404, "Licença não encontrada")
    return lic


@router.post("/activate", response_model=LicenseResponse)
def activate_license(data: LicenseActivate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    lic = db.query(License).filter(License.key == data.key).first()
    if not lic: raise HTTPException(404, "Chave de licença inválida")
    if lic.user_id != current_user.id: raise HTTPException(403, "Esta licença não lhe pertence")
    if lic.status != "active": raise HTTPException(400, "Licença não está ativa")
    lic.status = "active"
    db.commit(); db.refresh(lic)
    return lic
