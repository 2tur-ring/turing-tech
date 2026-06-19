from sqlalchemy import Column, Integer, String, DateTime, func, Float
from app.database import Base

class Sale(Base):
    __tablename__ = "sales"
    id = Column(Integer, primary_key=True, index=True)
    client_id = Column(Integer, nullable=True)
    product_name = Column(String(120))
    amount = Column(Float, default=0)
    quantity = Column(Integer, default=1)
    seller_id = Column(Integer, nullable=True)
    store_id = Column(Integer, nullable=True)
    payment_method = Column(String(30))
    status = Column(String(20), default="completed")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
