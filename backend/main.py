from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from config import settings
from app.auth.router import router as auth_router
from app.routers.tickets import router as tickets_router
from app.routers.licenses import router as licenses_router
from app.routers.invoices import router as invoices_router
from app.routers.downloads import router as downloads_router
from app.routers.clients import router as clients_router
from app.routers.sales import router as sales_router
from app.routers.inventory import router as inventory_router
from app.routers.finance import router as finance_router
from app.routers.employees import router as employees_router
from app.routers.purchases import router as purchases_router
from app.routers.erp_dashboard import router as erp_dashboard_router
from app.routers.stores import router as stores_router
from app.routers.ai import router as ai_router

DOWNLOAD_DIR = Path(__file__).parent / "downloads"
DOWNLOAD_DIR.mkdir(exist_ok=True)

app = FastAPI(
    title="Turing Tech API",
    description="Backend da Plataforma Turing Tech — ERP, IA, Dashboards, Downloads, Autenticação",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

allowed_origins = [o.strip() for o in settings.cors_origins.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(tickets_router)
app.include_router(licenses_router)
app.include_router(invoices_router)
app.include_router(downloads_router)
app.include_router(clients_router)
app.include_router(sales_router)
app.include_router(inventory_router)
app.include_router(finance_router)
app.include_router(employees_router)
app.include_router(purchases_router)
app.include_router(erp_dashboard_router)
app.include_router(stores_router)
app.include_router(ai_router)
app.mount("/api/downloads/files", StaticFiles(directory=str(DOWNLOAD_DIR)), name="downloads")


@app.get("/api/health")
def health_check():
    return {"status": "ok", "version": "1.0.0", "service": "Turing Tech API"}
