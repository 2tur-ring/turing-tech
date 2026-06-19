from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.sale import Sale
from app.schemas.erp import SaleCreate, SaleResponse, SalesSummary

router = APIRouter(prefix="/api/sales", tags=["ERP - Vendas"])


@router.get("", response_model=list[SaleResponse])
def list_sales(
    start_date: str = Query(""), end_date: str = Query(""),
    store_id: int = Query(None), db: Session = Depends(get_db),
):
    q = db.query(Sale)
    if start_date: q = q.filter(Sale.created_at >= datetime.fromisoformat(start_date))
    if end_date: q = q.filter(Sale.created_at <= datetime.fromisoformat(end_date))
    if store_id: q = q.filter(Sale.store_id == store_id)
    return q.order_by(Sale.created_at.desc()).all()


@router.post("", response_model=SaleResponse, status_code=201)
def create_sale(data: SaleCreate, db: Session = Depends(get_db)):
    sale = Sale(**data.model_dump())
    db.add(sale); db.commit(); db.refresh(sale)
    return sale


@router.get("/summary", response_model=SalesSummary)
def sales_summary(db: Session = Depends(get_db)):
    total = db.query(func.coalesce(func.sum(Sale.amount), 0)).scalar()
    count = db.query(func.count(Sale.id)).scalar()
    return SalesSummary(total=total, count=count, average_ticket=total / count if count else 0)


@router.get("/top-products")
def top_products(limit: int = Query(5), db: Session = Depends(get_db)):
    return db.query(Sale.product_name, func.sum(Sale.quantity).label("total_qty"), func.sum(Sale.amount).label("total_amount")) \
        .group_by(Sale.product_name).order_by(func.sum(Sale.quantity).desc()).limit(limit).all()


@router.get("/{sale_id}", response_model=SaleResponse)
def get_sale(sale_id: int, db: Session = Depends(get_db)):
    sale = db.query(Sale).filter(Sale.id == sale_id).first()
    if not sale: raise HTTPException(404, "Venda não encontrada")
    return sale
