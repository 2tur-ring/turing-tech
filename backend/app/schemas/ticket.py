from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class TicketCreate(BaseModel):
    subject: str
    message: str
    priority: Optional[str] = "normal"


class TicketResponse(BaseModel):
    id: int
    user_id: int
    subject: str
    message: str
    status: str
    priority: str
    created_at: Optional[datetime] = None
    closed_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class TicketUpdate(BaseModel):
    status: Optional[str] = None
    priority: Optional[str] = None
