from sqlalchemy import Column, Integer, String, DateTime, func, Boolean
from app.database import Base

class Store(Base):
    __tablename__ = "stores"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    address = Column(String(255))
    province = Column(String(60))
    manager_id = Column(Integer, nullable=True)
    phone = Column(String(20))
    status = Column(String(20), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
