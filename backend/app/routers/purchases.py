from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.purchase import Supplier, PurchaseOrder
from app.schemas.erp import SupplierCreate, SupplierUpdate, SupplierResponse, PurchaseOrderCreate, PurchaseOrderResponse

router = APIRouter(prefix="/api/purchases", tags=["ERP - Compras"])


@router.get("/suppliers", response_model=list[SupplierResponse])
def list_suppliers(search: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(Supplier)
    if search: q = q.filter(Supplier.name.ilike(f"%{search}%"))
    return q.order_by(Supplier.name).all()


@router.post("/suppliers", response_model=SupplierResponse, status_code=201)
def create_supplier(data: SupplierCreate, db: Session = Depends(get_db)):
    sup = Supplier(**data.model_dump())
    db.add(sup); db.commit(); db.refresh(sup)
    return sup


@router.put("/suppliers/{supplier_id}", response_model=SupplierResponse)
def update_supplier(supplier_id: int, data: SupplierUpdate, db: Session = Depends(get_db)):
    sup = db.query(Supplier).filter(Supplier.id == supplier_id).first()
    if not sup: raise HTTPException(404, "Fornecedor não encontrado")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(sup, field, value)
    db.commit(); db.refresh(sup)
    return sup


@router.get("/orders", response_model=list[PurchaseOrderResponse])
def list_orders(status: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(PurchaseOrder)
    if status: q = q.filter(PurchaseOrder.status == status)
    return q.order_by(PurchaseOrder.created_at.desc()).all()


@router.post("/orders", response_model=PurchaseOrderResponse, status_code=201)
def create_order(data: PurchaseOrderCreate, db: Session = Depends(get_db)):
    po = PurchaseOrder(**data.model_dump())
    db.add(po); db.commit(); db.refresh(po)
    return po


@router.put("/orders/{order_id}", response_model=PurchaseOrderResponse)
def update_order(order_id: int, data: PurchaseOrderCreate, db: Session = Depends(get_db)):
    po = db.query(PurchaseOrder).filter(PurchaseOrder.id == order_id).first()
    if not po: raise HTTPException(404, "Encomenda não encontrada")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(po, field, value)
    db.commit(); db.refresh(po)
    return po
