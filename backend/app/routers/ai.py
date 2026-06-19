from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.user import User
from app.models.ai_query import AIQuery
from app.models.sale import Sale
from app.models.finance import FinanceRecord
from app.models.inventory import InventoryItem
from app.dependencies import get_current_user
from app.services.ai_service import call_ai, build_context

router = APIRouter(prefix="/api/ai", tags=["AI - Smart"])


class ChatRequest(BaseModel):
    message: str
    model: str = "gpt-4o-mini"


class ReportRequest(BaseModel):
    module: str = "general"
    period: str = "este mês"


@router.post("/chat")
async def chat(data: ChatRequest, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    response = await call_ai(data.message, model=data.model)
    query = AIQuery(user_id=current_user.id, query=data.message, response=response, model=data.model, module="chat")
    db.add(query); db.commit()
    return {"response": response, "query_id": query.id}


@router.post("/report")
async def generate_report(data: ReportRequest, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    context_data = {}

    if data.module in ("general", "vendas"):
        total_sales = db.query(func.coalesce(func.sum(Sale.amount), 0)).scalar()
        sale_count = db.query(func.count(Sale.id)).scalar()
        context_data["total_vendas"] = f"{total_sales:.2f} Kz ({sale_count} vendas)"

    if data.module in ("general", "financas"):
        revenue = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)).filter(FinanceRecord.type == "revenue").scalar()
        expenses = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)).filter(FinanceRecord.type == "expense").scalar()
        context_data["receita"] = f"{revenue:.2f} Kz"
        context_data["despesas"] = f"{expenses:.2f} Kz"
        context_data["saldo"] = f"{revenue - expenses:.2f} Kz"

    if data.module in ("general", "stock"):
        low_stock = db.query(func.count(InventoryItem.id)).filter(InventoryItem.quantity <= InventoryItem.min_stock).scalar()
        context_data["alertas_stock"] = str(low_stock)

    prompt = f"Gere um relatório executivo sobre {data.module} referente a {data.period}. Inclua análise e recomendações acionáveis."
    context = build_context(context_data)
    response = await call_ai(prompt, context=context)
    query = AIQuery(user_id=current_user.id, query=prompt, response=response, model="gpt-4o-mini", module="report")
    db.add(query); db.commit()
    return {"response": response, "query_id": query.id}


@router.get("/predictions/sales")
async def sales_predictions(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    total_sales = db.query(func.coalesce(func.sum(Sale.amount), 0)).scalar()
    sale_count = db.query(func.count(Sale.id)).scalar()
    avg_ticket = total_sales / sale_count if sale_count else 0

    context = build_context({"total_vendas": f"{total_sales:.2f} Kz", "numero_vendas": str(sale_count), "ticket_medio": f"{avg_ticket:.2f} Kz"})
    prompt = "Com base nos dados de vendas, faça uma previsão para o próximo mês e sugira estratégias para aumentar as vendas."
    response = await call_ai(prompt, context=context)
    return {"response": response, "data": {"total_sales": total_sales, "sale_count": sale_count, "average_ticket": avg_ticket}}


@router.get("/insights")
async def insights(current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    revenue = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)).filter(FinanceRecord.type == "revenue").scalar()
    expenses = db.query(func.coalesce(func.sum(FinanceRecord.amount), 0)).filter(FinanceRecord.type == "expense").scalar()
    low_stock = db.query(func.count(InventoryItem.id)).filter(InventoryItem.quantity <= InventoryItem.min_stock).scalar()

    context = build_context({"receita": f"{revenue:.2f} Kz", "despesas": f"{expenses:.2f} Kz", "saldo": f"{revenue - expenses:.2f} Kz", "alertas_stock": str(low_stock)})
    prompt = "Analise os dados do negócio e forneça 3-5 insights acionáveis para melhoria. Seja específico e prático."
    response = await call_ai(prompt, context=context)
    return {"response": response}
