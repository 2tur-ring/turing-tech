from sqlalchemy import Column, Integer, String, DateTime, func, Float
from app.database import Base

class Supplier(Base):
    __tablename__ = "suppliers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    nif = Column(String(20))
    contact = Column(String(60))
    email = Column(String(255))
    telefone = Column(String(20))
    payment_terms = Column(String(60))
    rating = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class PurchaseOrder(Base):
    __tablename__ = "purchase_orders"
    id = Column(Integer, primary_key=True, index=True)
    supplier_id = Column(Integer, nullable=True)
    status = Column(String(20), default="pending")
    total = Column(Float, default=0)
    items = Column(String(500))
    expected_date = Column(DateTime(timezone=True))
    notes = Column(String(255))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
