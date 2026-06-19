from datetime import datetime
from typing import Optional
from pydantic import BaseModel


class ClientCreate(BaseModel):
    nome: str
    empresa: Optional[str] = None
    nif: Optional[str] = None
    sector: Optional[str] = None
    telefone: Optional[str] = None
    endereco: Optional[str] = None
    email: Optional[str] = None

class ClientUpdate(BaseModel):
    nome: Optional[str] = None
    empresa: Optional[str] = None
    nif: Optional[str] = None
    sector: Optional[str] = None
    telefone: Optional[str] = None
    endereco: Optional[str] = None
    email: Optional[str] = None

class ClientResponse(ClientCreate):
    id: int
    user_id: Optional[int] = None
    created_at: datetime
    model_config = {"from_attributes": True}


class SaleCreate(BaseModel):
    client_id: Optional[int] = None
    product_name: str
    amount: float = 0
    quantity: int = 1
    seller_id: Optional[int] = None
    store_id: Optional[int] = None
    payment_method: str = "cash"

class SaleResponse(SaleCreate):
    id: int
    status: str
    created_at: datetime
    model_config = {"from_attributes": True}


class InventoryItemCreate(BaseModel):
    name: str
    sku: Optional[str] = None
    category: Optional[str] = None
    quantity: int = 0
    min_stock: int = 5
    max_stock: int = 100
    price: float = 0
    store_id: Optional[int] = None
    location: Optional[str] = None

class InventoryItemUpdate(BaseModel):
    name: Optional[str] = None
    sku: Optional[str] = None
    category: Optional[str] = None
    quantity: Optional[int] = None
    min_stock: Optional[int] = None
    max_stock: Optional[int] = None
    price: Optional[float] = None
    location: Optional[str] = None

class InventoryItemResponse(InventoryItemCreate):
    id: int
    created_at: datetime
    model_config = {"from_attributes": True}

class InventoryMovementCreate(BaseModel):
    item_id: int
    type: str
    quantity: int
    reason: str

class InventoryMovementResponse(InventoryMovementCreate):
    id: int
    user_id: Optional[int] = None
    created_at: datetime
    model_config = {"from_attributes": True}


class FinanceRecordCreate(BaseModel):
    type: str
    category: Optional[str] = None
    amount: float = 0
    description: Optional[str] = None
    client_id: Optional[int] = None
    store_id: Optional[int] = None

class FinanceRecordResponse(FinanceRecordCreate):
    id: int
    status: str
    date: datetime
    created_at: datetime
    model_config = {"from_attributes": True}

class JournalEntryCreate(BaseModel):
    account_code: str
    account_name: Optional[str] = None
    debit: float = 0
    credit: float = 0
    description: Optional[str] = None

class JournalEntryResponse(JournalEntryCreate):
    id: int
    reconciled: str
    date: datetime
    model_config = {"from_attributes": True}


class EmployeeCreate(BaseModel):
    nome: str
    email: Optional[str] = None
    telefone: Optional[str] = None
    role: Optional[str] = None
    department: Optional[str] = None
    salary: float = 0
    hire_date: Optional[datetime] = None

class EmployeeUpdate(BaseModel):
    nome: Optional[str] = None
    email: Optional[str] = None
    telefone: Optional[str] = None
    role: Optional[str] = None
    department: Optional[str] = None
    salary: Optional[float] = None
    status: Optional[str] = None

class EmployeeResponse(EmployeeCreate):
    id: int
    status: str
    created_at: datetime
    model_config = {"from_attributes": True}

class AttendanceCreate(BaseModel):
    employee_id: int
    check_in: Optional[str] = None
    check_out: Optional[str] = None
    status: str = "present"

class AttendanceResponse(AttendanceCreate):
    id: int
    date: datetime
    model_config = {"from_attributes": True}


class SupplierCreate(BaseModel):
    name: str
    nif: Optional[str] = None
    contact: Optional[str] = None
    email: Optional[str] = None
    telefone: Optional[str] = None
    payment_terms: Optional[str] = None

class SupplierUpdate(BaseModel):
    name: Optional[str] = None
    nif: Optional[str] = None
    contact: Optional[str] = None
    email: Optional[str] = None
    telefone: Optional[str] = None
    payment_terms: Optional[str] = None
    rating: Optional[int] = None

class SupplierResponse(SupplierCreate):
    id: int
    rating: int
    created_at: datetime
    model_config = {"from_attributes": True}

class PurchaseOrderCreate(BaseModel):
    supplier_id: Optional[int] = None
    total: float = 0
    items: Optional[str] = None
    expected_date: Optional[datetime] = None
    notes: Optional[str] = None

class PurchaseOrderResponse(PurchaseOrderCreate):
    id: int
    status: str
    created_at: datetime
    model_config = {"from_attributes": True}


class StoreCreate(BaseModel):
    name: str
    address: Optional[str] = None
    province: Optional[str] = None
    phone: Optional[str] = None

class StoreResponse(StoreCreate):
    id: int
    manager_id: Optional[int] = None
    status: str
    created_at: datetime
    model_config = {"from_attributes": True}


class DashboardOverview(BaseModel):
    total_revenue: float = 0
    total_sales: int = 0
    total_clients: int = 0
    total_employees: int = 0
    stock_alerts: int = 0
    pending_orders: int = 0
    open_tickets: int = 0
    pending_invoices: float = 0

class SalesSummary(BaseModel):
    total: float = 0
    count: int = 0
    average_ticket: float = 0
    top_products: list = []
    daily: list = []

class FinanceSummary(BaseModel):
    revenue: float = 0
    expenses: float = 0
    balance: float = 0
    pending: float = 0
    monthly: list = []
