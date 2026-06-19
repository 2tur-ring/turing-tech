from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class LicenseResponse(BaseModel):
    id: int
    user_id: int
    product_id: int
    key: str
    status: str
    max_devices: int
    activated_at: Optional[datetime] = None
    expires_at: Optional[datetime] = None
    created_at: Optional[datetime] = None

    model_config = {"from_attributes": True}


class LicenseActivate(BaseModel):
    key: str
    device_id: str
