# ROADMAP DE IMPLEMENTAÇÃO — TURING TECH

> **Stack:** React 19 + Vite 6 + Python FastAPI + SQLite (dev) / PostgreSQL (prod)
> **Início:** Junho 2026
> **Estimativa total:** ~18.5 horas

---

## 📊 Legenda de Status

| Símbolo | Status |
|---|---|
| ⬜ | Por fazer |
| 🟦 | Em progresso |
| ✅ | Concluído |
| ❌ | Bloqueado / Cancelado |

---

## FASE 0 — Setup do Projecto

**Duração estimada:** 30 min
**Objectivo:** Inicializar frontend e backend, configurar Docker, garantir que tudo corre em ambiente de desenvolvimento.

### Tarefas

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 0.1 | Inicializar Vite + React (`npm create vite@latest`) | ✅ | |
| 0.2 | Instalar dependências (react-router-dom, axios) | ✅ | |
| 0.3 | Configurar Vite proxy para API (CORS dev) | ✅ | |
| 0.4 | Inicializar FastAPI + dependências | ✅ | |
| 0.5 | Instalar: SQLAlchemy, Alembic, Pydantic, python-jose, passlib | ✅ | |
| 0.6 | Configurar Docker Compose (PostgreSQL + pgAdmin) | ✅ | |
| 0.7 | Setup Alembic para migrations | ✅ | |
| 0.8 | Configurar variáveis de ambiente (.env) | ✅ | |
| 0.9 | Verificar que frontend + backend + BD comunicam | ✅ | SQLite em dev; PostgreSQL em prod |
| 0.10 | Commit inicial (`git init`, `.gitignore`) | ⬜ | |

**✅ Critério de conclusão:** `npm run dev` + `uvicorn main:app --reload` + SQLite a correr.

---

## FASE 1 — Design System e Componentes Base

**Duração estimada:** 2h
**Objectivo:** Migrar o design system do ficheiro original para CSS Modules + React componentes, criar layout global.

### Tarefas

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 1.1 | Criar `design-system.css` com variáveis CSS do original | ✅ | |
| 1.2 | Migrar classes utilitárias (container, grid, spacing, buttons) | ✅ | |
| 1.3 | Componente **Button** (primary, secondary, ghost, sizes) | ✅ | |
| 1.4 | Componente **Card** (com hover effect) | ✅ | |
| 1.5 | Componente **ConsoleMockup** (terminal simulado) | ✅ | |
| 1.6 | Componente **IconTile** (ícone com fundo) | ✅ | |
| 1.7 | Componente **Eyebrow** (rótulo de secção) | ✅ | |
| 1.8 | Componente **SectionHeader** (título + descrição) | ✅ | |
| 1.9 | Componente **TabBar + TabPanel** | ✅ | |
| 1.10 | Componente **Accordion** (FAQ) | ✅ | |
| 1.11 | Componente **RoadmapRow** (com status pill) | ✅ | |
| 1.12 | Componente **TestimonialCarousel** | ✅ | |
| 1.13 | Componente **Counter** (números animados) | ✅ | |
| 1.14 | Componente **CTABand** | ✅ | |
| 1.15 | Componente **Breadcrumb** | ✅ | |
| 1.16 | Componente **Pill / Tag** | ✅ | Pill, StatusPill, Tag |
| 1.17 | Hook personalizado: `useIntersectionObserver` | ✅ | |
| 1.18 | Hook personalizado: `useCounters` | ✅ | |
| 1.19 | Componente **Navbar** (com scroll, dropdowns, mobile toggle) | ✅ | |
| 1.20 | Componente **Footer** (com links, redes sociais) | ✅ | |
| 1.21 | Componente **MobilePanel** | ✅ | Integrado no Navbar |
| 1.22 | **Layout wrapper** (Navbar + content + Footer) | ✅ | |
| 1.23 | Configurar React Router (router.jsx) | ✅ | |
| 1.24 | Testar responsividade dos componentes base | ✅ | |

**✅ Critério de conclusão:** Todos os componentes UI renderizados correctamente, navbar funcional, layout responsivo.

---

## FASE 2 — Páginas Públicas

**Duração estimada:** 4h
**Objectivo:** Construir todas as páginas públicas do site com dados mock no frontend.

### Tarefas

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.1 | Importar dados mock para `data/` | ✅ | |
| 2.2 | Criar `data/servicos.js` (21 categorias completas) | ✅ | |
| 2.3 | Criar `data/produtos.js` (produtos próprios) | ✅ | |
| 2.4 | Criar `data/depoimentos.js` | ✅ | |
| 2.5 | Criar `data/blog-posts.js` | ✅ | |
| 2.6 | Criar `data/recursos.js` | ✅ | |
| 2.7 | Criar `data/vagas.js` | ✅ | |
| 2.8 | Criar `data/faq.js` | ✅ | |

#### Página Home

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.9 | Hero com slogan novo + console mockup | ✅ | hero-bg.png adicionado |
| 2.10 | Secção Sobre (missão/visão resumida) | ✅ | |
| 2.11 | Produtos em destaque (VISÃO 360, Smart AI → Genius AI, próximos) | ✅ | |
| 2.12 | Serviços resumidos (4 cards principais) | ✅ | |
| 2.13 | Estatísticas animadas | ✅ | |
| 2.14 | Depoimentos (carrossel) | ✅ | |
| 2.15 | CTA final | ✅ | |

#### Página Sobre

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.16 | Page header + breadcrumb | ✅ | |
| 2.17 | História (timeline: 2023–2026) | ✅ | |
| 2.18 | Missão + Visão (cards lado a lado) | ✅ | |
| 2.19 | Valores (5 cards) | ✅ | |
| 2.20 | CTA final | ✅ | |

#### Página Serviços

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.21 | Page header com breadcrumb | ✅ | |
| 2.22 | Navegação por grupos (6 tabs/grupos) | ✅ | |
| 2.23 | Grupo 1: Software & Plataformas (cat. 1–4) | ✅ | |
| 2.24 | Grupo 2: IA & Cloud (cat. 5–8) | ✅ | |
| 2.25 | Grupo 3: Transformação & Dados (cat. 9–11) | ✅ | |
| 2.26 | Grupo 4: Governo & Educação (cat. 12–15) | ✅ | |
| 2.27 | Grupo 5: Finanças & Marketing (cat. 16–18) | ✅ | |
| 2.28 | Grupo 6: Capacitação & Inovação (cat. 19–21) | ✅ | |
| 2.29 | Accordion/Card para cada sub-item de serviço | ✅ | |
| 2.30 | CTA por grupo | ✅ | |

#### Página Produtos

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.31 | VISÃO 360 detalhado (8 módulos com tabs) | ✅ | |
| 2.32 | Smart AI → Genius AI detalhado | ✅ | Rebranded |
| 2.33 | Turing Cloud detalhado | ✅ | |
| 2.34 | Grid dos restantes produtos (ERP, CRM, HR, etc.) | ✅ | |
| 2.35 | Roadmap completo | ✅ | |
| 2.36 | CTA final | ✅ | |

#### Páginas Restantes

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 2.37 | **Blog** — artigo em destaque + grid com filtros | ✅ | |
| 2.38 | **Recursos** — grid de downloads com filtros | ✅ | |
| 2.39 | **Downloads** — apps gratuitas/demo para download | ✅ | |
| 2.40 | **Suporte** — FAQ accordion + canais de contacto + status | ✅ | WhatsApp atualizado |
| 2.41 | **Carreiras** — cultura + vagas + estágios | ✅ | |
| 2.42 | **Contacto** — formulário + informações + mapa | ✅ | Email atualizado |
| 2.43 | Validar formulário de contacto no frontend | ✅ | |

**✅ Critério de conclusão:** Todas as páginas públicas navegáveis, com conteúdo mock, responsivas, design visualmente idêntico ao original (expandido para 21 categorias).

---

## FASE 3 — Autenticação (Backend + Frontend)

**Duração estimada:** 3h
**Objectivo:** Sistema completo de registo, login, JWT e protecção de rotas.

### Backend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 3.1 | Criar modelo User (SQLAlchemy) | ✅ | `app/models/user.py` |
| 3.2 | Criar schema User (Pydantic) | ✅ | `app/schemas/user.py` |
| 3.3 | Implementar password hashing (passlib + bcrypt) | ✅ | `app/auth/utils.py` |
| 3.4 | Implementar geração/verificação de JWT | ✅ | `app/auth/utils.py` |
| 3.5 | Endpoint: POST `/api/auth/register` | ✅ | `app/auth/router.py` |
| 3.6 | Endpoint: POST `/api/auth/login` | ✅ | |
| 3.7 | Endpoint: POST `/api/auth/refresh` | ✅ | |
| 3.8 | Endpoint: GET `/api/auth/me` | ✅ | |
| 3.9 | Endpoint: PUT `/api/auth/me` | ✅ | |
| 3.10 | Dependência de autenticação (rotas protegidas) | ✅ | `get_current_user` |
| 3.11 | Migração Alembic (tabela users) | ⬜ | Pendente `alembic revision` |
| 3.22 | **Google OAuth** — POST `/api/auth/google` | ✅ | `google-auth` library + token verification |

### Frontend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 3.12 | Criar AuthContext (login, logout, token, user) | ✅ | |
| 3.13 | Implementar `api.js` (Axios com interceptor JWT) | ✅ | Refresh automático incluso |
| 3.14 | Hook `useAuth` | ✅ | |
| 3.15 | Página **Login** | ✅ | Com Google OAuth |
| 3.16 | Página **Register** | ✅ | Com Google OAuth |
| 3.17 | Componente **ProtectedRoute** | ✅ | |
| 3.18 | Redireccionamento pós-login (dashboard) | ✅ | |
| 3.19 | Tratamento de token expirado (refresh automático) | ✅ | Interceptor em `api.js` |
| 3.20 | Logout | ✅ | |
| 3.21 | Testar fluxo completo: register → login → dashboard → logout | ⬜ | |
| 3.23 | **GoogleButton** — componente com Google Identity Services | ✅ | Overlay invisível sobre botão estilizado |

**✅ Critério de conclusão:** Utilizador consegue registar-se, fazer login com email/password ou Google, aceder a rotas protegidas, renovar token automaticamente.

---

## FASE 4 — Área de Cliente

**Duração estimada:** 2h
**Objectivo:** Dashboard básico do cliente com perfil, downloads, licenças, tickets.

### Backend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 4.1 | Modelos: License, Download, Ticket, Invoice | ✅ | Já existem em `app/models/` |
| 4.2 | Schemas Pydantic para cada modelo | ✅ | Já existem em `app/schemas/` |
| 4.3 | Endpoints CRUD de tickets | ✅ | `routers/tickets.py` |
| 4.4 | Endpoints de licenças (listar, activar) | ✅ | `routers/licenses.py` |
| 4.5 | Endpoints de downloads (gerar token) | ✅ | `routers/downloads.py` |
| 4.6 | Migrations Alembic | ⬜ | |

### Frontend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 4.7 | Componente **DashboardLayout** (sidebar + header + content) | ⬜ | |
| 4.8 | Página **Overview** — KPIs do cliente | ⬜ | |
| 4.9 | Página **Perfil** — editar dados pessoais | ⬜ | |
| 4.10 | Página **Meus Downloads** — apps licenciadas | ⬜ | |
| 4.11 | Página **Licenças** — gerir activações | ⬜ | |
| 4.12 | Página **Tickets** — abrir, listar, responder | ⬜ | |
| 4.13 | Página **Faturas** — listar e fazer download | ⬜ | |

**✅ Critério de conclusão:** Cliente autenticado acede a todas as páginas da área de cliente com dados reais da BD.

---

## FASE 5 — Dashboards ERP

**Duração estimada:** 4h
**Objectivo:** Módulos ERP com dados reais, CRUDs, agregações para dashboards.

### Backend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 5.1 | Modelo Client (CRM) + endpoints CRUD | ✅ | `models/client.py`, `routers/clients.py` |
| 5.2 | Modelo Sale + endpoints (listar, criar, summary) | ✅ | |
| 5.3 | Modelo InventoryItem + endpoints (stock, ajustes, alertas) | ✅ | |
| 5.4 | Modelo FinanceRecord + endpoints (cashflow, summary) | ✅ | |
| 5.5 | Modelo Employee + Attendance + endpoints | ✅ | |
| 5.6 | Modelo PurchaseOrder + Supplier + endpoints | ✅ | |
| 5.7 | Endpoints de agregação para dashboard (KPIs consolidados) | ✅ | `routers/erp_dashboard.py` |
| 5.8 | Endpoint: GET `/api/dashboard/overview` | ✅ | |
| 5.9 | Seeds/mock data para desenvolvimento | ⬜ | |

### Frontend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 5.10 | Componente **KPIWidget** | ⬜ | |
| 5.11 | Componente **ChartWidget** (recharts) | ⬜ | |
| 5.12 | Componente **ActivityFeed** | ⬜ | |
| 5.13 | Página **Dashboard ERP** — KPIs, gráficos, alertas | ⬜ | |
| 5.14 | Página **Finanças** — fluxo caixa, contas, transacções | ⬜ | |
| 5.15 | Página **Vendas** — tabela + gráficos + top produtos | ⬜ | |
| 5.16 | Página **Stock** — inventário + alertas + movimentos | ⬜ | |
| 5.17 | Página **Compras** — pedidos + fornecedores | ⬜ | |
| 5.18 | Página **RH** — colaboradores + presenças + folha | ⬜ | |
| 5.19 | Página **CRM** — clientes + histórico | ⬜ | |
| 5.20 | Página **Contabilidade** — lançamentos + exportação | ⬜ | |

**✅ Critério de conclusão:** Módulos ERP funcionais com dados reais, CRUDs operacionais, dashboards com gráficos.

---

## FASE 6 — Serviços de IA

**Duração estimada:** 2h
**Objectivo:** Chatbot, relatórios automáticos e previsões.

### Backend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 6.1 | Integrar LangChain + OpenAI SDK | ⬜ | |
| 6.2 | Endpoint: POST `/api/ai/chat` | ✅ | `routers/ai.py` |
| 6.3 | Endpoint: POST `/api/ai/report` | ✅ | |
| 6.4 | Endpoint: GET `/api/ai/predictions/sales` | ⬜ | |
| 6.5 | Modelo AIQuery (histórico de queries) | ✅ | `models/ai_query.py` |
| 6.6 | Rate limiting nos endpoints de IA | ⬜ | |

### Frontend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 6.7 | Componente **ChatWidget** (flutuante ou página) | ✅ | |
| 6.8 | Página **Smart AI** — chat interactivo | ✅ | Renomeado para Genius AI |
| 6.9 | Botão "Gerar Relatório" nos dashboards | ⬜ | |
| 6.10 | Secção de "Sugestões IA" no dashboard ERP | ⬜ | |

**✅ Critério de conclusão:** Chatbot funcional, relatórios gerados por IA, previsões de venda visíveis no dashboard.

---

## FASE 7 — Downloads e Licenciamento

**Duração estimada:** 1h
**Objectivo:** Sistema de download de apps com controlo de licenças.

### Backend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 7.1 | Modelo Product (para apps) + endpoints | ✅ | `models/product.py` |
| 7.2 | Endpoint: POST `/api/downloads/token` | ✅ | |
| 7.3 | Endpoint: GET `/api/downloads/{file_id}` (com validação) | ✅ | |
| 7.4 | Modelo License + endpoints (listar, activar, revogar) | ✅ | |
| 7.5 | Limite de dispositivos por licença | ⬜ | |

### Frontend

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 7.6 | Página **Downloads** pública (apps demo) | ✅ | |
| 7.7 | Página **Meus Downloads** (autenticada) | ⬜ | |
| 7.8 | Fluxo de download com token temporário | ⬜ | |
| 7.9 | Estado visual da licença (activa/expirada) | ⬜ | |

**✅ Critério de conclusão:** Download de apps funcional com validação de licença, tokens temporários.

---

## FASE 8 — Copywriting e SEO

**Duração estimada:** 1h
**Objectivo:** Textos profissionais, meta tags, sitemap.

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 8.1 | Escrever descrições para todas as 21 categorias | ✅ | Já existem nos dados mock |
| 8.2 | Textos de cada sub-item de serviço (2-3 linhas cada) | ✅ | |
| 8.3 | Meta tags (title + description + OG) por página | ⬜ | |
| 8.4 | Configurar react-helmet-async para meta tags | ⬜ | |
| 8.5 | Criar sitemap.xml | ⬜ | |
| 8.6 | Criar robots.txt | ⬜ | |
| 8.7 | Schema.org (Organization, SoftwareApplication) | ⬜ | |
| 8.8 | Rever ortografia e tom de voz (português angolano) | ⬜ | |

**✅ Critério de conclusão:** Meta tags correctas, sitemap válido, textos revistos.

---

## FASE 9 — Testes

**Duração estimada:** 1h
**Objectivo:** Garantir que tudo funciona correctamente.

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 9.1 | Testar registo → login → dashboard → logout | ⬜ | |
| 9.2 | Testar CRUD de clientes (ERP) | ⬜ | |
| 9.3 | Testar CRUD de vendas | ⬜ | |
| 9.4 | Testar dashboard com agregações | ⬜ | |
| 9.5 | Testar chatbot IA | ⬜ | |
| 9.6 | Testar download de app (com e sem licença) | ⬜ | |
| 9.7 | Testar formulário de contacto | ⬜ | |
| 9.8 | Testar responsividade (mobile, tablet, desktop) | ⬜ | |
| 9.9 | Testar em Chrome, Firefox, Edge | ⬜ | |
| 9.10 | Testar navegação por todas as páginas | ⬜ | |
| 9.11 | Testar links internos e externos | ⬜ | |
| 9.12 | Testar formulários com dados inválidos | ⬜ | |

**✅ Critério de conclusão:** Zero erros críticos, todos os fluxos funcionais.

---

## FASE 10 — Deploy

**Duração estimada:** 1h
**Objectivo:** Colocar plataforma no ar.

| # | Tarefa | Status | Notas |
|---|---|---|---|
| 10.1 | Frontend: `npm run build` | ⬜ | |
| 10.2 | Deploy frontend (Vercel / Netlify) | ⬜ | |
| 10.3 | Configurar domínio + SSL | ⬜ | |
| 10.4 | Backend: build Docker image | ⬜ | |
| 10.5 | Deploy backend (Railway / Render) | ⬜ | |
| 10.6 | Configurar BD PostgreSQL gerenciado | ⬜ | |
| 10.7 | Configurar variáveis de ambiente em produção | ⬜ | |
| 10.8 | Configurar CDN para downloads (S3/R2) | ⬜ | |
| 10.9 | Setup CI/CD (GitHub Actions) | ⬜ | |
| 10.10 | Testar em produção | ⬜ | |
| 10.11 | Monitorização (uptime, erros) | ⬜ | |

**✅ Critério de conclusão:** Plataforma no ar, domínio próprio, HTTPS, downloads funcionais.

---

## RESUMO DE FASES

| Fase | Duração | Tarefas | Concluídas | Progresso |
|---|---|---|---|---|
| 0 — Setup | 30 min | 10 | 9 | 90% |
| 1 — Design System | 2h | 24 | 24 | 100% |
| 2 — Páginas Públicas | 4h | 43 | 43 | 100% |
| 3 — Autenticação | 3h | 23 | 21 | 91% |
| 4 — Área de Cliente | 2h | 13 | 6 | 46% |
| 5 — Dashboards ERP | 4h | 20 | 9 | 45% |
| 6 — IA | 2h | 10 | 4 | 40% |
| 7 — Downloads | 1h | 9 | 5 | 56% |
| 8 — Copywriting + SEO | 1h | 8 | 2 | 25% |
| 9 — Testes | 1h | 12 | 0 | 0% |
| 10 — Deploy | 1h | 11 | 0 | 0% |
| **Total** | **~18.5h** | **183** | **123** | **67%** |

---

## CHECKLIST RÁPIDO (PROGRESSO GERAL)

```
FASE 0:  ✅✅✅✅✅✅✅✅✅⬜                     9/10  (90%)
FASE 1:  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅  24/24 (100%)
FASE 2:  ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅  43/43 (100%)
FASE 3:  ✅✅✅✅✅✅✅✅✅✅✅⬜✅✅✅✅✅✅✅✅✅⬜✅  21/23  (91%)
FASE 4:  ✅✅✅✅✅✅⬜⬜⬜⬜⬜⬜⬜                  6/13  (46%)
FASE 5:  ✅✅✅✅✅✅✅✅✅⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜        9/20  (45%)
FASE 6:  ✅✅✅⬜✅⬜✅✅⬜⬜                      4/10  (40%)
FASE 7:  ✅✅✅✅⬜✅⬜⬜⬜                        5/9   (56%)
FASE 8:  ✅✅⬜⬜⬜⬜⬜⬜                          2/8   (25%)
FASE 9:  ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜                    0/12  (0%)
FASE 10: ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜                    0/11  (0%)
GERAL:   ✅✅✅✅✅✅✅⬜⬜⬜                    123/183 (67%)
```

---

> **Este documento será actualizado à medida que a implementação avança.**
> Cada tarefa é marcada como 🟦 (em progresso) quando iniciada e ✅ (concluída) quando finalizada.
