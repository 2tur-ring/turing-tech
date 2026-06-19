from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.ticket import Ticket
from app.models.user import User
from app.schemas.ticket import TicketCreate, TicketResponse, TicketUpdate
from app.dependencies import get_current_user

router = APIRouter(prefix="/api/tickets", tags=["Tickets"])


@router.get("", response_model=list[TicketResponse])
def list_tickets(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    return db.query(Ticket).filter(Ticket.user_id == current_user.id).order_by(Ticket.created_at.desc()).all()


@router.post("", response_model=TicketResponse, status_code=201)
def create_ticket(data: TicketCreate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    ticket = Ticket(user_id=current_user.id, **data.model_dump())
    db.add(ticket); db.commit(); db.refresh(ticket)
    return ticket


@router.get("/{ticket_id}", response_model=TicketResponse)
def get_ticket(ticket_id: int, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    ticket = db.query(Ticket).filter(Ticket.id == ticket_id, Ticket.user_id == current_user.id).first()
    if not ticket: raise HTTPException(404, "Ticket não encontrado")
    return ticket


@router.put("/{ticket_id}", response_model=TicketResponse)
def update_ticket(ticket_id: int, data: TicketUpdate, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    ticket = db.query(Ticket).filter(Ticket.id == ticket_id, Ticket.user_id == current_user.id).first()
    if not ticket: raise HTTPException(404, "Ticket não encontrado")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(ticket, field, value)
    db.commit(); db.refresh(ticket)
    return ticket
