from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.invoice import Invoice
from app.models.user import User
from app.schemas.invoice import InvoiceResponse
from app.dependencies import get_current_user

router = APIRouter(prefix="/api/invoices", tags=["Faturas"])


@router.get("", response_model=list[InvoiceResponse])
def list_invoices(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(Invoice).filter(Invoice.user_id == current_user.id).order_by(Invoice.created_at.desc()).all()


@router.get("/{invoice_id}", response_model=InvoiceResponse)
def get_invoice(invoice_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    inv = db.query(Invoice).filter(Invoice.id == invoice_id, Invoice.user_id == current_user.id).first()
    if not inv: raise HTTPException(404, "Fatura não encontrada")
    return inv
