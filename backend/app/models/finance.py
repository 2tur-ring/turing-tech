from sqlalchemy import Column, Integer, String, DateTime, func, Float
from app.database import Base

class FinanceRecord(Base):
    __tablename__ = "finance_records"
    id = Column(Integer, primary_key=True, index=True)
    type = Column(String(20), nullable=False)
    category = Column(String(60))
    amount = Column(Float, default=0)
    description = Column(String(255))
    client_id = Column(Integer, nullable=True)
    store_id = Column(Integer, nullable=True)
    status = Column(String(20), default="pending")
    date = Column(DateTime(timezone=True), server_default=func.now())
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class JournalEntry(Base):
    __tablename__ = "journal_entries"
    id = Column(Integer, primary_key=True, index=True)
    account_code = Column(String(20), nullable=False)
    account_name = Column(String(120))
    debit = Column(Float, default=0)
    credit = Column(Float, default=0)
    description = Column(String(255))
    reconciled = Column(String(20), default="no")
    date = Column(DateTime(timezone=True), server_default=func.now())
