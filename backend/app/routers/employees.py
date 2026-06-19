from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.employee import Employee, Attendance
from app.schemas.erp import EmployeeCreate, EmployeeUpdate, EmployeeResponse, AttendanceCreate, AttendanceResponse

router = APIRouter(prefix="/api/employees", tags=["ERP - RH"])


@router.get("", response_model=list[EmployeeResponse])
def list_employees(department: str = Query(""), status: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(Employee)
    if department: q = q.filter(Employee.department == department)
    if status: q = q.filter(Employee.status == status)
    return q.order_by(Employee.nome).all()


@router.post("", response_model=EmployeeResponse, status_code=201)
def create_employee(data: EmployeeCreate, db: Session = Depends(get_db)):
    emp = Employee(**data.model_dump())
    db.add(emp); db.commit(); db.refresh(emp)
    return emp


@router.get("/{employee_id}", response_model=EmployeeResponse)
def get_employee(employee_id: int, db: Session = Depends(get_db)):
    emp = db.query(Employee).filter(Employee.id == employee_id).first()
    if not emp: raise HTTPException(404, "Funcionário não encontrado")
    return emp


@router.put("/{employee_id}", response_model=EmployeeResponse)
def update_employee(employee_id: int, data: EmployeeUpdate, db: Session = Depends(get_db)):
    emp = db.query(Employee).filter(Employee.id == employee_id).first()
    if not emp: raise HTTPException(404, "Funcionário não encontrado")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(emp, field, value)
    db.commit(); db.refresh(emp)
    return emp


@router.get("/{employee_id}/attendance", response_model=list[AttendanceResponse])
def list_attendance(employee_id: int, db: Session = Depends(get_db)):
    return db.query(Attendance).filter(Attendance.employee_id == employee_id).order_by(Attendance.date.desc()).all()


@router.post("/attendance", response_model=AttendanceResponse, status_code=201)
def create_attendance(data: AttendanceCreate, db: Session = Depends(get_db)):
    att = Attendance(**data.model_dump())
    db.add(att); db.commit(); db.refresh(att)
    return att
