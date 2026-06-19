from pathlib import Path
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "sqlite:///./turingtech.db"
    jwt_secret_key: str = "super-secret-key-change-in-production"
    jwt_algorithm: str = "HS256"
    jwt_access_token_expire_minutes: int = 30
    jwt_refresh_token_expire_days: int = 7
    cors_origins: str = "http://localhost:5173,http://localhost:3000"
    openai_api_key: str = ""
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    contact_email: str = "Turingbigtech@gmail.com"
    google_client_id: str = ""
    storage_backend: str = "local"
    storage_path: str = "./downloads"

    env_file = Path(__file__).parent.parent / ".env"
    model_config = {"env_file": str(env_file), "case_sensitive": False}


settings = Settings()
