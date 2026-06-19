from datetime import datetime
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.finance import FinanceRecord, JournalEntry
from app.schemas.erp import FinanceRecordCreate, FinanceRecordResponse, FinanceSummary, JournalEntryCreate, JournalEntryResponse

router = APIRouter(prefix="/api/finance", tags=["ERP - Finanças"])


@router.get("/transactions", response_model=list[FinanceRecordResponse])
def list_transactions(type: str = Query(""), category: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(FinanceRecord)
    if type: q = q.filter(FinanceRecord.type == type)
    if category: q = q.filter(FinanceRecord.category == category)
    return q.order_by(FinanceRecord.date.desc()).all()


@router.post("/transactions", response_model=FinanceRecordResponse, status_code=201)
def create_transaction(data: FinanceRecordCreate, db: Session = Depends(get_db)):
    record = FinanceRecord(**data.model_dump())
    db.add(record); db.commit(); db.refresh(record)
    return record


@router.get("/summary", response_model=FinanceSummary)
def finance_summary(db: Session = Depends(get_db)):
    revenue = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)) \
        .filter(FinanceRecord.type == "revenue").scalar()
    expenses = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)) \
        .filter(FinanceRecord.type == "expense").scalar()
    pending = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)) \
        .filter(FinanceRecord.status == "pending").scalar()
    return FinanceSummary(revenue=revenue, expenses=expenses, balance=revenue - expenses, pending=pending)


@router.get("/cashflow")
def cashflow(start_date: str = Query(""), end_date: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(
        func.date_trunc("day", FinanceRecord.date).label("day"),
        FinanceRecord.type,
        func.sum(FinanceRecord.amount).label("amount"),
    )
    if start_date: q = q.filter(FinanceRecord.date >= datetime.fromisoformat(start_date))
    if end_date: q = q.filter(FinanceRecord.date <= datetime.fromisoformat(end_date))
    return q.group_by(func.date_trunc("day", FinanceRecord.date), FinanceRecord.type).order_by("day").all()


@router.get("/entries", response_model=list[JournalEntryResponse])
def list_entries(account_code: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(JournalEntry)
    if account_code: q = q.filter(JournalEntry.account_code == account_code)
    return q.order_by(JournalEntry.date.desc()).all()


@router.post("/entries", response_model=JournalEntryResponse, status_code=201)
def create_entry(data: JournalEntryCreate, db: Session = Depends(get_db)):
    entry = JournalEntry(**data.model_dump())
    db.add(entry); db.commit(); db.refresh(entry)
    return entry
