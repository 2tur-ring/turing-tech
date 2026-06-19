from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class InvoiceResponse(BaseModel):
    id: int
    user_id: int
    amount: float
    status: str
    due_date: Optional[datetime] = None
    paid_at: Optional[datetime] = None
    pdf_url: Optional[str] = None
    created_at: Optional[datetime] = None

    model_config = {"from_attributes": True}
