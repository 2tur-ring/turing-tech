from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.store import Store
from app.schemas.erp import StoreCreate, StoreResponse

router = APIRouter(prefix="/api/stores", tags=["ERP - Lojas"])


@router.get("", response_model=list[StoreResponse])
def list_stores(db: Session = Depends(get_db)):
    return db.query(Store).order_by(Store.name).all()


@router.post("", response_model=StoreResponse, status_code=201)
def create_store(data: StoreCreate, db: Session = Depends(get_db)):
    store = Store(**data.model_dump())
    db.add(store); db.commit(); db.refresh(store)
    return store


@router.get("/{store_id}", response_model=StoreResponse)
def get_store(store_id: int, db: Session = Depends(get_db)):
    store = db.query(Store).filter(Store.id == store_id).first()
    if not store: raise HTTPException(404, "Loja não encontrada")
    return store
