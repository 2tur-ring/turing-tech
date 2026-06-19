from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base


class DownloadLog(Base):
    __tablename__ = "download_logs"

    id = Column(Integer, primary_key=True, index=True)
    license_id = Column(Integer, ForeignKey("licenses.id"), nullable=False)
    file_id = Column(Integer, nullable=False)
    downloaded_at = Column(DateTime(timezone=True), server_default=func.now())
    device_id = Column(String(200), nullable=True)
    ip = Column(String(45), nullable=True)

    license = relationship("License")
