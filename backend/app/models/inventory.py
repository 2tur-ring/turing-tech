from sqlalchemy import Column, Integer, String, DateTime, func, Float
from app.database import Base

class InventoryItem(Base):
    __tablename__ = "inventory_items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    sku = Column(String(60), index=True)
    category = Column(String(60))
    quantity = Column(Integer, default=0)
    min_stock = Column(Integer, default=5)
    max_stock = Column(Integer, default=100)
    price = Column(Float, default=0)
    store_id = Column(Integer, nullable=True)
    location = Column(String(80))
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class InventoryMovement(Base):
    __tablename__ = "inventory_movements"
    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, nullable=False)
    type = Column(String(20))
    quantity = Column(Integer, default=0)
    reason = Column(String(255))
    user_id = Column(Integer, nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
