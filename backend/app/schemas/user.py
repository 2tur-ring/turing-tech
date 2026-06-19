from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime


class UserCreate(BaseModel):
    nome: str
    email: EmailStr
    password: str
    telefone: Optional[str] = None
    empresa: Optional[str] = None
    nif: Optional[str] = None


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    nome: str
    email: str
    telefone: Optional[str] = None
    role: str
    empresa: Optional[str] = None
    nif: Optional[str] = None
    is_active: bool
    created_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class UserUpdate(BaseModel):
    nome: Optional[str] = None
    telefone: Optional[str] = None
    empresa: Optional[str] = None
    nif: Optional[str] = None


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"
    user: UserResponse


class TokenRefresh(BaseModel):
    refresh_token: str
