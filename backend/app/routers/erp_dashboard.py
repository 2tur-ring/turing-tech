from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.sale import Sale
from app.models.client import Client
from app.models.employee import Employee
from app.models.inventory import InventoryItem
from app.models.purchase import PurchaseOrder
from app.models.ticket import Ticket
from app.models.finance import FinanceRecord
from app.schemas.erp import DashboardOverview

router = APIRouter(prefix="/api/dashboard", tags=["ERP - Dashboard"])


@router.get("/overview", response_model=DashboardOverview)
def dashboard_overview(db: Session = Depends(get_db)):
    return DashboardOverview(
        total_revenue=db.query(func.coalesce(func.sum(Sale.amount), 0)).scalar(),
        total_sales=db.query(func.count(Sale.id)).scalar(),
        total_clients=db.query(func.count(Client.id)).scalar(),
        total_employees=db.query(func.count(Employee.id)).filter(Employee.status == "active").scalar(),
        stock_alerts=db.query(func.count(InventoryItem.id)).filter(InventoryItem.quantity <= InventoryItem.min_stock).scalar(),
        pending_orders=db.query(func.count(PurchaseOrder.id)).filter(PurchaseOrder.status == "pending").scalar(),
        open_tickets=db.query(func.count(Ticket.id)).filter(Ticket.status == "open").scalar(),
        pending_invoices=db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)).filter(FinanceRecord.status == "pending").scalar(),
    )


@router.get("/kpis")
def dashboard_kpis(db: Session = Depends(get_db)):
    return {
        "sales_today": db.query(func.coalesce(func.sum(Sale.amount), 0)).filter(func.date(Sale.created_at) == func.current_date()).scalar(),
        "sales_month": db.query(func.coalesce(func.sum(Sale.amount), 0)).filter(func.extract("month", Sale.created_at) == func.extract("month", func.current_date())).scalar(),
        "active_employees": db.query(func.count(Employee.id)).filter(Employee.status == "active").scalar(),
        "low_stock_items": db.query(func.count(InventoryItem.id)).filter(InventoryItem.quantity <= InventoryItem.min_stock).scalar(),
    }


@router.get("/activity")
def recent_activity(limit: int = 10, db: Session = Depends(get_db)):
    sales = db.query(Sale).order_by(Sale.created_at.desc()).limit(limit).all()
    return [{"type": "sale", "description": f"Venda #{s.id} — {s.product_name} — {s.amount} Kz", "date": s.created_at.isoformat()} for s in sales]


@router.get("/alerts")
def dashboard_alerts(db: Session = Depends(get_db)):
    items = db.query(InventoryItem).filter(InventoryItem.quantity <= InventoryItem.min_stock).all()
    return [{"type": "low_stock", "item": i.name, "current": i.quantity, "min": i.min_stock} for i in items]
