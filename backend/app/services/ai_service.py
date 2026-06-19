import httpx
from config import settings

OPENAI_BASE = "https://api.openai.com/v1"
DEFAULT_MODEL = "gpt-4o-mini"

SYSTEM_PROMPT = """You are VISÃO Smart AI, the intelligent assistant of Turing Tech's VISÃO 360 ERP system. 
You help business managers in Angola with:
- Analysing sales data and financial reports
- Providing management insights and suggestions
- Generating reports in Portuguese (pt-PT)
- Explaining ERP features and business concepts
- Helping with Angolan business regulations and tax practices

Always respond in Portuguese (European/Angolan variant). Be concise, practical, and data-driven."""


async def call_ai(prompt: str, context: str = "", model: str = DEFAULT_MODEL) -> str:
    api_key = settings.openai_api_key
    if not api_key:
        return "⚠ Assistentente AI não configurada. Defina OPENAI_API_KEY no ficheiro .env."

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    if context:
        messages.append({"role": "user", "content": f"Aqui estão alguns dados do ERP para contexto:\n\n{context}"})
    messages.append({"role": "user", "content": prompt})

    try:
        async with httpx.AsyncClient(timeout=60) as client:
            resp = await client.post(
                f"{OPENAI_BASE}/chat/completions",
                headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
                json={"model": model, "messages": messages, "temperature": 0.3, "max_tokens": 1500},
            )
            resp.raise_for_status()
            data = resp.json()
            return data["choices"][0]["message"]["content"]
    except httpx.HTTPError as e:
        return f"❌ Erro ao contactar o serviço AI: {str(e)}"


def build_context(data: dict) -> str:
    parts = []
    for key, value in data.items():
        parts.append(f"{key}: {value}")
    return "\n".join(parts)
