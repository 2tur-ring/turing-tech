from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta, datetime, timezone

from app.database import get_db
from app.models.license import License
from app.models.user import User
from app.schemas.download import DownloadTokenRequest, DownloadTokenResponse
from app.dependencies import get_current_user
from app.auth.utils import create_access_token

router = APIRouter(prefix="/api/downloads", tags=["Downloads"])


@router.post("/token", response_model=DownloadTokenResponse)
def request_download_token(data: DownloadTokenRequest, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    lic = db.query(License).filter(License.key == data.license_key).first()
    if not lic: raise HTTPException(404, "Licença não encontrada")
    if lic.user_id != current_user.id: raise HTTPException(403, "Licença não lhe pertence")
    if lic.status != "active": raise HTTPException(400, "Licença não ativa")
    token = create_access_token(
        {"sub": current_user.id, "file_id": data.file_id, "type": "download"},
        expires_delta=30,
    )
    return DownloadTokenResponse(
        token=token,
        expires_in=30,
        download_url=f"/api/downloads/file/{data.file_id}?token={token}",
    )
