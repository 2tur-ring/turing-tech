from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.client import Client
from app.schemas.erp import ClientCreate, ClientUpdate, ClientResponse

router = APIRouter(prefix="/api/clients", tags=["ERP - Clientes"])


@router.get("", response_model=list[ClientResponse])
def list_clients(search: str = Query(""), db: Session = Depends(get_db)):
    q = db.query(Client)
    if search:
        q = q.filter(Client.nome.ilike(f"%{search}%") | Client.empresa.ilike(f"%{search}%"))
    return q.order_by(Client.nome).all()


@router.post("", response_model=ClientResponse, status_code=201)
def create_client(data: ClientCreate, db: Session = Depends(get_db)):
    client = Client(**data.model_dump())
    db.add(client); db.commit(); db.refresh(client)
    return client


@router.get("/{client_id}", response_model=ClientResponse)
def get_client(client_id: int, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client: raise HTTPException(404, "Cliente não encontrado")
    return client


@router.put("/{client_id}", response_model=ClientResponse)
def update_client(client_id: int, data: ClientUpdate, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client: raise HTTPException(404, "Cliente não encontrado")
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(client, field, value)
    db.commit(); db.refresh(client)
    return client


@router.delete("/{client_id}", status_code=204)
def delete_client(client_id: int, db: Session = Depends(get_db)):
    client = db.query(Client).filter(Client.id == client_id).first()
    if not client: raise HTTPException(404, "Cliente não encontrado")
    db.delete(client); db.commit()
