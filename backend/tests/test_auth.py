import pytest


@pytest.mark.anyio
async def test_register(client):
    payload = {"nome": "Teste", "email": "teste@teste.com", "password": "Teste123!"}
    response = await client.post("/api/auth/register", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["user"]["email"] == "teste@teste.com"
    assert "access_token" in data


@pytest.mark.anyio
async def test_register_duplicate_email(client):
    payload = {"nome": "Teste", "email": "dup@teste.com", "password": "Teste123!"}
    await client.post("/api/auth/register", json=payload)
    response = await client.post("/api/auth/register", json=payload)
    assert response.status_code == 409


@pytest.mark.anyio
async def test_login(client):
    await client.post("/api/auth/register", json={"nome": "Teste", "email": "login@teste.com", "password": "Teste123!"})
    response = await client.post("/api/auth/login", json={"email": "login@teste.com", "password": "Teste123!"})
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"


@pytest.mark.anyio
async def test_login_wrong_password(client):
    await client.post("/api/auth/register", json={"nome": "Teste", "email": "wrong@teste.com", "password": "Teste123!"})
    response = await client.post("/api/auth/login", json={"email": "wrong@teste.com", "password": "wrong"})
    assert response.status_code == 401
