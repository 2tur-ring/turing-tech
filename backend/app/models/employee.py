from sqlalchemy import Column, Integer, String, DateTime, func, Float, Boolean
from app.database import Base

class Employee(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(120), nullable=False)
    email = Column(String(255))
    telefone = Column(String(20))
    role = Column(String(60))
    department = Column(String(60))
    salary = Column(Float, default=0)
    hire_date = Column(DateTime(timezone=True))
    status = Column(String(20), default="active")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Attendance(Base):
    __tablename__ = "attendance"
    id = Column(Integer, primary_key=True, index=True)
    employee_id = Column(Integer, nullable=False)
    date = Column(DateTime(timezone=True), server_default=func.now())
    check_in = Column(String(10))
    check_out = Column(String(10))
    status = Column(String(20), default="present")
