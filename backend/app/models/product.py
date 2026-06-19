from sqlalchemy import Column, Integer, String, DateTime, Text
from sqlalchemy.sql import func
from app.database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    slug = Column(String(120), unique=True, index=True, nullable=False)
    type = Column(String(20), default="software")
    description = Column(Text)
    version = Column(String(20))
    price = Column(Integer, default=0)
    file_url = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
