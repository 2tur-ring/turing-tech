from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.inventory import InventoryItem, InventoryMovement
from app.schemas.erp import InventoryItemCreate, InventoryItemUpdate, InventoryItemResponse, InventoryMovementCreate, InventoryMovementResponse

router = APIRouter(prefix="/api/inventory", tags=["ERP - Inventário"])


@router.get("", response_model=list[InventoryItemResponse])
def list_items(
    category: str = Query(""), low_stock: bool = Query(False), store_id: int = Query(None), db: Session = Depends(get_db),
):
    q = db.query(InventoryItem)
    if category: q = q.filter(InventoryItem.category == category)
    if low_stock: q = q.filter(InventoryItem.quantity <= InventoryItem.min_stock)
    if store_id: q = q.filter(InventoryItem.store_id == store_id)
    return q.order_by(InventoryItem.name).all()


@router.post("", response_model=InventoryItemResponse, status_code=201)
def create_item(data: InventoryItemCreate, db: Session = Depends(get_db)):
    item = InventoryItem(**data.model_dump())
    db.add(item); db.commit(); db.refresh(item)
    return item


@router.put("/{item_id}", response_model=InventoryItemResponse)
def update_item(item_id: int, data: InventoryItemUpdate, db: Session = Depends(get_db)):
    item = db.query(InventoryItem).filter(InventoryItem.id == item_id).first()
    if not item: raise HTTPException(404, "Item não encontrado")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(item, field, value)
    db.commit(); db.refresh(item)
    return item


@router.get("/alerts")
def stock_alerts(db: Session = Depends(get_db)):
    return db.query(InventoryItem).filter(InventoryItem.quantity <= InventoryItem.min_stock).all()


@router.post("/adjust", response_model=InventoryItemResponse)
def adjust_stock(data: InventoryMovementCreate, db: Session = Depends(get_db)):
    item = db.query(InventoryItem).filter(InventoryItem.id == data.item_id).first()
    if not item: raise HTTPException(404, "Item não encontrado")
    if data.type == "in": item.quantity += data.quantity
    else: item.quantity = max(0, item.quantity - data.quantity)
    movement = InventoryMovement(**data.model_dump())
    db.add(movement); db.commit(); db.refresh(item)
    return item


@router.get("/movements", response_model=list[InventoryMovementResponse])
def list_movements(item_id: int = Query(None), db: Session = Depends(get_db)):
    q = db.query(InventoryMovement)
    if item_id: q = q.filter(InventoryMovement.item_id == item_id)
    return q.order_by(InventoryMovement.created_at.desc()).all()
