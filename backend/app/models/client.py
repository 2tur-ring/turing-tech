from sqlalchemy import Column, Integer, String, DateTime, func
from app.database import Base

class Client(Base):
    __tablename__ = "clients"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    nome = Column(String(120), nullable=False)
    empresa = Column(String(120))
    nif = Column(String(20))
    sector = Column(String(60))
    telefone = Column(String(20))
    endereco = Column(String(255))
    email = Column(String(255))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
