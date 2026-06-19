from sqlalchemy import Column, Integer, String, DateTime, func, Text
from app.database import Base

class AIQuery(Base):
    __tablename__ = "ai_queries"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, nullable=True)
    query = Column(Text, nullable=False)
    response = Column(Text)
    model = Column(String(40), default="gpt-4")
    tokens_used = Column(Integer, default=0)
    module = Column(String(40), default="general")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
