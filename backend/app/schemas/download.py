from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class DownloadTokenRequest(BaseModel):
    license_key: str
    file_id: int


class DownloadTokenResponse(BaseModel):
    token: str
    expires_in: int
    download_url: str


class DownloadLogResponse(BaseModel):
    id: int
    license_id: int
    file_id: int
    downloaded_at: Optional[datetime] = None
    device_id: Optional[str] = None

    model_config = {"from_attributes": True}
