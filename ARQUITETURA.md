# ARQUITETURA DA PLATAFORMA TURING TECH

## Visão Geral

Plataforma completa para a Turing Tech — site institucional, área de cliente, dashboards ERP integrados, download de aplicações e serviços de Inteligência Artificial. Arquitetura moderna com frontend e backend separados, seguindo o padrão utilizado por grandes empresas de tecnologia (Netflix, Nubank, Spotify, etc.).

---

## 1. STACK TECNOLÓGICA

### Frontend

| Tecnologia | Versão | Função |
|---|---|---|
| **React** | 19.x | Framework de UI — componentes reutilizáveis, estado reativo |
| **Vite** | 6.x | Build tool — HMR instantâneo, build rápido, zero Webpack |
| **React Router** | 7.x | Roteamento SPA — lazy loading por página |
| **CSS Modules** | — | Estilos encapsulados por componente |
| **Design System** | Próprio | CSS Variáveis + classes utilitárias herdadas do `turingtech-single.html` |
| **Axios** | — | Cliente HTTP para comunicação com a API |

### Backend

| Tecnologia | Versão | Função |
|---|---|---|
| **Python** | 3.12+ | Linguagem principal do backend |
| **FastAPI** | — | Framework web assíncrona — alta performance, documentação automática |
| **SQLAlchemy** | 2.x | ORM — modelos relacionais do ERP |
| **Alembic** | — | Migrations da base de dados |
| **Pydantic** | 2.x | Schemas de validação e serialização |
| **PostgreSQL** | 16 | Base de dados relacional principal |
| **Docker** | — | Containerização do backend + BD |

### IA / Machine Learning

| Tecnologia | Função |
|---|---|
| **LangChain** | Orquestração de modelos de linguagem (chatbot, relatórios) |
| **OpenAI SDK** | Integração com GPT para assistente inteligente |
| **scikit-learn** | Previsão de vendas, análise de padrões |
| **Pandas / NumPy** | Análise e agregação de dados para dashboards |

### Infraestrutura

| Componente | Sugestão |
|---|---|
| **Frontend Host** | Vercel / Netlify / Cloudflare Pages |
| **Backend Host** | Railway / Render / DigitalOcean App Platform |
| **Base de Dados** | Supabase / Neon / AWS RDS |
| **CDN para Downloads** | Cloudflare R2 / AWS S3 + CloudFront |
| **Domínio** | turingtech.co.ao (ou similar) |
| **CI/CD** | GitHub Actions (build + deploy automático ao fazer push) |

---

## 2. ARQUITECTURA DO SISTEMA

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENTE                              │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                  React + Vite (SPA)                  │    │
│  │                                                      │    │
│  │  ┌─────────┐  ┌──────────┐  ┌──────────────────┐   │    │
│  │  │ Páginas  │  │ Component│  │   Contexts /      │   │    │
│  │  │ Públicas │  │   UI     │  │   Hooks / Serv.   │   │    │
│  │  └────┬─────┘  └──────────┘  └──────────────────┘   │    │
│  │       │                                              │    │
│  │  ┌────┴─────┐  ┌──────────┐  ┌──────────────────┐   │    │
│  │  │ Auth /   │  │ Dashboard│  │   Downloads /     │   │    │
│  │  │ Área     │  │   ERP    │  │   Licenças        │   │    │
│  │  │ Cliente  │  │          │  │                   │   │    │
│  │  └──────────┘  └──────────┘  └──────────────────┘   │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         │                                    │
│                    HTTP/REST (JSON)                          │
│                         ▼                                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FASTAPI (Backend)                     │
│                                                              │
│  ┌─────────┐  ┌────────┐  ┌────────┐  ┌────────────────┐   │
│  │  Auth   │  │  ERP   │  │  IA    │  │  Downloads /   │   │
│  │  (JWT)  │  │  CRUD  │  │ Chat   │  │  Licenças      │   │
│  └────┬────┘  └───┬────┘  └───┬────┘  └───────┬────────┘   │
│       │           │           │                │            │
│  ┌────┴───────────┴───────────┴────────────────┴──────┐     │
│  │               SQLAlchemy ORM                        │     │
│  └───────────────────────┬────────────────────────────┘     │
│                          │                                   │
│                     PostgreSQL                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     SERVIÇOS EXTERNOS                        │
│                                                              │
│  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌───────────┐  │
│  │ OpenAI   │  │ SendGrid  │  │ S3/CDN   │  │  Google   │  │
│  │ (GPT)    │  │ (Email)   │  │(Downloads)│  │  Maps     │  │
│  └──────────┘  └───────────┘  └──────────┘  └───────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. DESIGN SYSTEM

### 3.1 Paleta de Cores

```css
/* Cores principais */
--bg:        #090D18;          /* Fundo principal - deep ink */
--bg-soft:   #0C1222;          /* Fundo secundário */
--surface:   #121A30;          /* Superfície de cards */
--surface-2: #17213D;          /* Superfície elevada */
--border:    #232E4E;          /* Borda padrão */
--border-2:  #2E3A60;          /* Borda elevada */

/* Cores de texto */
--text:         #EDF1FA;       /* Texto principal - quase branco */
--text-muted:   #92A0C4;       /* Texto secundário */
--text-dim:     #5E6A91;       /* Texto terciário */

/* Cores de destaque */
--accent:       #4C6FFF;       /* Turing signal blue */
--accent-rgb:   76,111,255;
--accent-soft:  rgba(76,111,255,.12);
--accent-2:     #2DD4BF;       /* Smart AI teal */
--accent-2-rgb: 45,212,191;
--accent-2-soft: rgba(45,212,191,.12);
--warm:         #FFB454;       /* Insight amber */
--warm-rgb:     255,180,84;
--warm-soft:    rgba(255,180,84,.14);

/* Cores de estado */
--danger:       #FF6B6B;       /* Erro / alerta */
--success:      #34D399;       /* Sucesso / online */
```

### 3.2 Tipografia

```css
--font-display: 'Space Grotesk', sans-serif;   /* Títulos */
--font-body:    'Inter', sans-serif;           /* Corpo */
--font-mono:    'IBM Plex Mono', monospace;    /* Dados, código, métricas */
```

### 3.3 Espaçamento e Layout

```css
--container: 1240px;          /* Largura máxima do conteúdo */
--r-sm: 8px;                  /* Border-radius pequeno */
--r-md: 14px;                 /* Border-radius médio */
--r-lg: 24px;                 /* Border-radius grande */
--r-pill: 999px;              /* Border-radius pill */
--ease: cubic-bezier(.22,1,.36,1);  /* Curva de easing */
```

### 3.4 Componentes Base

| Componente | Descrição |
|---|---|
| **Navbar** | Navegação principal fixa, blur ao scroll, dropdowns |
| **Footer** | Links, redes sociais, legal |
| **Button** | Primary (warm), Secondary (surface), Ghost |
| **Card** | Superfície com hover elevado |
| **ConsoleMockup** | Simulação de terminal / dashboard |
| **IconTile** | Ícone em bloco com fundo colorido |
| **Eyebrow** | Rótulo de secção com indicador |
| **SectionHeader** | Título + descrição de secção |
| **TabBar** | Navegação por tabs com painéis |
| **Accordion** | FAQ / conteúdo expansível |
| **RoadmapRow** | Item de roadmap com status |
| **TestimonialCarousel** | Depoimentos com navegação |
| **Counter** | Números animados com IntersectionObserver |
| **CTABand** | Faixa de call-to-action |
| **Breadcrumb** | Navegação hierárquica |
| **Pill** | Tag / chip |
| **KPIWidget** | Indicador de dashboard |
| **ChartWidget** | Gráfico para dashboards |
| **ActivityFeed** | Feed de atividade em tempo real |

---

## 4. ESTRUTURA DO FRONTEND

### 4.1 Páginas Públicas (sem autenticação)

```
/                    → Home
/sobre               → Sobre Nós (história, missão, visão, valores)
/servicos            → Serviços (21 categorias organizadas em grupos)
/produtos            → Produtos Próprios
/blog                → Blog Tecnológico
/recursos            → Centro de Recursos (catálogos, e-books, casos de estudo)
/downloads           → Downloads (apps gratuitas/demo)
/suporte             → Suporte + FAQ
/carreiras           → Carreiras (vagas, estágios, cultura)
/contacto            → Contacto (formulário, mapa, informações)
```

### 4.2 Páginas de Autenticação

```
/login               → Login
/register            → Registo
/recuperar-senha     → Recuperação de senha
```

### 4.3 Área de Cliente (autenticada)

```
/dashboard           → Overview (visão geral do cliente)
/dashboard/perfil    → Perfil do utilizador
/dashboard/downloads → Meus Downloads (apps licenciadas)
/dashboard/licencas  → Minhas Licenças / Activações
/dashboard/tickets   → Meus Tickets de Suporte
/dashboard/faturas   → Minhas Faturas
```

### 4.4 Dashboards ERP (autenticado + permissões)

```
/erp/dashboard       → Overview ERP (KPIs consolidados)
/erp/financas        → Módulo Finanças
/erp/vendas          → Módulo Vendas / POS
/erp/stock           → Módulo Inventário
/erp/compras         → Módulo Compras
/erp/rh              → Módulo Recursos Humanos
/erp/clientes        → Módulo CRM
/erp/contabilidade   → Módulo Contabilidade
/erp/smart-ai        → VISÃO Smart AI (chat + relatórios)
```

---

## 5. AS 21 CATEGORIAS DE SERVIÇOS

### Grupo 1: Software & Plataformas

| # | Categoria | Sub-itens |
|---|---|---|
| 1 | **Desenvolvimento de Software** | ERP, CRM, RH, Financeiro, Inventário, Compras, Vendas, Produção, Frota, Contratos |
| 2 | **Plataformas Digitais** | Marketplaces (Carros, Motas, Imóveis, E-commerce, B2B, Agrícola), E-learning, Telemedicina, Streaming, Eventos, Recrutamento, Freelancers, Delivery, Reservas |
| 3 | **Desenvolvimento Web** | Sites Corporativos, Portais, Lojas Online, Landing Pages, Portais Governamentais, Educacionais, Hospitalares, Intranets, Extranets |
| 4 | **Desenvolvimento Mobile** | Android (Empresarial, Comercial, Financeiro, Educacional), iOS (Empresarial, Premium, Governamental) |

### Grupo 2: IA & Cloud

| # | Categoria | Sub-itens |
|---|---|---|
| 5 | **Inteligência Artificial** | Chatbots, Assistentes Virtuais, Copilotos, Análise de Dados, Previsão Vendas/Financeira, Automação, Visão Computacional, Reconhecimento Documentos, IA para RH/Saúde/Educação |
| 6 | **Cloud Computing** | Migração, Infraestrutura, Servidores Virtuais, Backup, Disaster Recovery, Cloud Privada/Híbrida, Monitorização |
| 7 | **Cibersegurança** | Auditoria, Testes Intrusão, Segurança Redes/Aplicações, Gestão Vulnerabilidades, SOC, Monitorização 24/7 |
| 8 | **Infraestrutura Tecnológica** | Redes, Wi-Fi Empresarial, Data Centers, Servidores, Virtualização, Monitorização |

### Grupo 3: Transformação & Dados

| # | Categoria | Sub-itens |
|---|---|---|
| 9 | **Transformação Digital** | Consultoria, Digitalização Processos, Automação, Modernização, Estratégia Tecnológica, Planeamento TI |
| 10 | **Análise de Dados & BI** | Dashboards Executivos, KPI, BI, Big Data, Data Warehouse, Data Analytics, Relatórios Inteligentes |
| 11 | **Internet das Coisas (IoT)** | Cidades Inteligentes, Agricultura Inteligente, Monitorização Industrial/Ambiental, Gestão Energética, Rastreamento |

### Grupo 4: Governo & Sector Público

| # | Categoria | Sub-itens |
|---|---|---|
| 12 | **Serviços para Governos** | Portal Cidadão, Serviços Públicos Online, Gestão Tributária/Municipal/Eleitoral/Documentos, Smart Cities (Trânsito, Segurança, Iluminação Inteligente) |
| 13 | **Serviços para Educação** | Gestão Escolar/Universitária, Ensino à Distância, Bibliotecas Digitais, Avaliações Online, Portais Académicos |
| 14 | **Serviços para Saúde** | Prontuário Eletrónico, Gestão Hospitalar, Telemedicina, Farmácias, Agendamento, Gestão Laboratorial |
| 15 | **Serviços para Agricultura** | Gestão Agrícola, Monitorização Culturas, Agricultura Precisão, Marketplace Agrícola, Gestão Pecuária |

### Grupo 5: Finanças & Marketing

| # | Categoria | Sub-itens |
|---|---|---|
| 16 | **Serviços para Bancos & Fintech** | Carteiras Digitais, Pagamentos Eletrónicos, Mobile Banking, Core Banking, Crédito, Open Banking |
| 17 | **Design & Experiência Digital** | UI/UX Design, Design Gráfico, Branding, Identidade Visual, Prototipagem, Design Produtos Digitais |
| 18 | **Marketing Digital** | SEO, Redes Sociais, Publicidade Digital, Email Marketing, Automação Marketing, Produção Conteúdo |

### Grupo 6: Capacitação & Inovação

| # | Categoria | Sub-itens |
|---|---|---|
| 19 | **Formação e Capacitação** | Formação em Tecnologia, IA, Programação, Cibersegurança, Corporativa, Academia Turing Tech |
| 20 | **Pesquisa e Inovação** | Lab IA, Lab Robótica, Lab IoT, Pesquisa Tecnológica, Patentes, Inovação Empresarial |
| 21 | **Produtos Próprios** | VISÃO 360, GENIUS AI, Turing Cloud, Turing ERP, Turing CRM, Turing HR, Turing Education, Turing Health, Turing Government, Turing Marketplace |

---

## 6. PRODUTOS PRÓPRIOS

| Produto | Tipo | Descrição |
|---|---|---|
| **VISÃO 360** | ERP | Sistema Operacional Empresarial Africano — 8 módulos (Finanças, Contabilidade, Compras, Vendas, RH, CRM, POS, Inventário) |
| **GENIUS AI** | IA | Assistente Inteligente Empresarial — consultas em linguagem natural, relatórios automáticos, previsões |
| **Turing Cloud** | Cloud | Plataforma Cloud Africana — hospedagem, servidores virtuais, backup |
| **Turing ERP** | ERP | ERP completo para África (versão standalone) |
| **Turing CRM** | CRM | Gestão de Clientes |
| **Turing HR** | RH | Gestão de Recursos Humanos |
| **Turing Education** | Educação | Ecossistema Educacional — gestão escolar, EAD, bibliotecas digitais |
| **Turing Health** | Saúde | Ecossistema de Saúde — prontuário, telemedicina, gestão hospitalar |
| **Turing Government** | Governo | Plataforma de Governo Digital — portal cidadão, serviços públicos |
| **Turing Marketplace** | Comércio | Ecossistema de Comércio Digital |

---

## 7. MODELO DE DADOS (SQLAlchemy)

### Principais Entidades

```
User (id, nome, email, password_hash, telefone, role, created_at)
├── Client (id, user_id, empresa, nif, sector, telefone, endereco)
├── License (id, user_id, product_id, key, status, expires_at, max_devices)
├── Download (id, license_id, file_id, downloaded_at, device_id, ip)
├── Ticket (id, user_id, subject, message, status, priority, created_at, closed_at)
├── Invoice (id, user_id, amount, status, due_date, paid_at, pdf_url)
│
Product (id, name, slug, type, description, version, price, file_url)
│
├── Sale (id, product_id, client_id, amount, quantity, seller_id, date, store_id, payment_method)
├── InventoryItem (id, product_id, store_id, quantity, min_stock, max_stock, location)
├── PurchaseOrder (id, supplier_id, status, total, expected_date, created_at)
├── Supplier (id, name, nif, contact, payment_terms, rating)
│
├── FinanceRecord (id, type, category, amount, description, date, client_id, store_id, status)
├── JournalEntry (id, account_id, debit, credit, description, date, reconciled)
│
├── Employee (id, name, role, department, salary, hire_date, status)
├── Attendance (id, employee_id, date, check_in, check_out, status)
│
├── Store (id, name, address, province, manager_id, status)
└── AIQuery (id, user_id, query, response, tokens_used, model, created_at)
```

---

## 8. ENDPOINTS DA API

### Autenticação

```
POST   /api/auth/register         → Registar novo utilizador
POST   /api/auth/login            → Login (devolve JWT)
POST   /api/auth/refresh          → Renovar token
GET    /api/auth/me               → Dados do utilizador actual
PUT    /api/auth/me               → Actualizar perfil
```

### ERP — Clientes (CRM)

```
GET    /api/clients               → Listar clientes (filtros: search, sector, page)
POST   /api/clients               → Criar cliente
GET    /api/clients/{id}          → Detalhes do cliente
PUT    /api/clients/{id}          → Actualizar cliente
DELETE /api/clients/{id}          → Remover cliente
```

### ERP — Vendas

```
GET    /api/sales                 → Listar vendas (filtros: date_range, store, seller)
POST   /api/sales                 → Registar venda
GET    /api/sales/{id}            → Detalhes da venda
GET    /api/sales/summary         → Resumo agregado (gráficos dashboard)
GET    /api/sales/top-products    → Produtos mais vendidos
```

### ERP — Inventário

```
GET    /api/inventory             → Listar stock (filtros: store, category, low_stock)
POST   /api/inventory/adjust      → Ajustar stock (entrada/saída)
GET    /api/inventory/alerts      → Alertas de stock crítico
GET    /api/inventory/movements   → Histórico de movimentos
```

### ERP — Finanças

```
GET    /api/finance/cashflow      → Fluxo de caixa (date_range)
GET    /api/finance/summary       → Resumo financeiro (receitas, despesas, margens)
GET    /api/finance/accounts      → Contas a pagar/receber
POST   /api/finance/transaction   → Registar transacção
```

### ERP — RH

```
GET    /api/employees             → Listar colaboradores
POST   /api/employees             → Registar colaborador
GET    /api/employees/{id}        → Detalhes do colaborador
GET    /api/attendance            → Presenças (date_range)
POST   /api/payroll/process       → Processar folha salarial
```

### Dashboard

```
GET    /api/dashboard/overview    → KPIs consolidados (receita, vendas, stock, RH)
GET    /api/dashboard/kpis        → Indicadores-chave por módulo
GET    /api/dashboard/activity    → Feed de atividade recente
GET    /api/dashboard/alerts      → Alertas e notificações
```

### Downloads e Licenças

```
GET    /api/downloads             → Listar apps disponíveis para download
POST   /api/downloads/token       → Gerar token de download temporário
GET    /api/downloads/{file_id}   → Download com validação de token
GET    /api/licenses              → Listar licenças do utilizador
POST   /api/licenses/activate    → Activar licença (product_key)
```

### IA

```
POST   /api/ai/chat               → Conversar com o assistente (query → resposta)
POST   /api/ai/report             → Gerar relatório automático (tipo, data_range)
GET    /api/ai/predictions/sales  → Previsão de vendas (product_id, dias)
GET    /api/ai/insights           → Sugestões de gestão baseadas em padrões
```

### Suporte

```
POST   /api/tickets               → Abrir ticket de suporte
GET    /api/tickets               → Listar tickets do utilizador
GET    /api/tickets/{id}          → Detalhes do ticket + mensagens
POST   /api/tickets/{id}/reply    → Responder ao ticket
```

### Contacto

```
POST   /api/contact               → Enviar formulário de contacto (nome, email, assunto, mensagem)
POST   /api/contact/demo          → Solicitar demonstração
```

---

## 9. FLUXO DE AUTENTICAÇÃO

```
[Utilizador] → Preenche formulário de login
              → POST /api/auth/login
              → Backend valida credenciais (email + password_hash)
              → Gera JWT (access_token + refresh_token)
              → Devolve tokens + dados do utilizador
              → React armazena tokens (localStorage/httpOnly cookie)
              → AuthContext actualiza estado global
              → React Router redirecciona para dashboard ou página anterior

[Token expirado] → React interceptor detecta 401
                 → Tenta refresh token (POST /api/auth/refresh)
                 → Se refresh válido → novos tokens
                 → Se refresh inválido → logout → redirect para login
```

---

## 10. ESTRUTURA DO SINGLE FILE ORIGINAL (Referência)

O ficheiro `turingtech-single.html` (2950 linhas) serve como referência de **design system, componentes UI e conteúdo textual**. Todo o CSS, animações e componentes serão migrados para React mantendo a identidade visual.

| Secção | Linhas | Estado |
|---|---|---|
| CSS Design System | 9–640 | Migrar para `design-system.css` |
| Home / Hero | 647–716 | Manter e expandir |
| Sobre | 718–746 | Manter |
| Produtos em Destaque | 748–837 | Migrar para componentes |
| Serviços (4 cat.) | 839–902 | **Expandir para 21 categorias** |
| Estatísticas | 904–926 | Manter (Counter component) |
| Depoimentos | 928–971 | Manter (Carousel component) |
| Sobre (página completa) | 989–1127 | Manter |
| Produtos (VISÃO 360 + Smart AI) | 1128–1479 | Migrar para página dedicada |
| Serviços (4 cat.) | 1481–1678 | Expandir para 21 categorias |
| Sectores | 1680–1806 | Manter |
| Blog | 1808–1961 | Manter e expandir |
| Recursos | 1962–2120 | Manter |
| Carreiras | 2122–2280 | Manter |
| Suporte / FAQ | 2282–2422 | Manter |
| Contacto | 2424–2547 | Manter (tornar funcional) |
| JavaScript (Router + Componentes) | 2552–2948 | Migrar para React + React Router |

---

## 11. RESPONSIVIDADE

| Breakpoint | Largura | Comportamento |
|---|---|---|
| **Desktop** | > 920px | Layout completo, navbar com dropdowns |
| **Tablet** | 641px – 920px | Grid 2 colunas, menu hamburger |
| **Mobile** | ≤ 640px | Grid 1 coluna, menu hamburger, navegação simplificada |

---

## 12. SLOGAN, MISSÃO E VISÃO

### Slogan

> **Transformando África através da Tecnologia, Inovação e Inteligência Artificial.**

### Missão

> Acelerar a transformação digital de África através de soluções tecnológicas inovadoras, acessíveis e escaláveis.

### Visão

> Tornar-se a empresa tecnológica africana mais influente e completa, servindo governos, organizações, empresas e cidadãos em todo o continente.

---

## 13. PERFORMANCE E SEGURANÇA

### Performance

- Build Vite com code splitting por rota
- Lazy loading de páginas do dashboard (só carregam quando o utilizador autentica)
- Imagens otimizadas (WebP)
- CDN para ficheiros estáticos
- Cache headers para recursos públicos
- Compressão Gzip/Brotli

### Segurança

- JWT com refresh tokens
- Senhas hasheadas com bcrypt (passlib)
- CORS configurado (apenas domínios autorizados)
- Rate limiting nos endpoints de auth e contacto
- Input validation com Pydantic
- SQLAlchemy previne SQL injection
- Headers de segurança (Helmet-like via middleware)
- Tokens de download temporários (expiração 5 minutos)

---

## 14. DEPLOY

### Frontend (Vite)

```bash
cd frontend
npm run build    → gera pasta dist/
```

Deploy da pasta `dist/` para: Vercel, Netlify, Cloudflare Pages ou GitHub Pages.

### Backend (Docker)

```bash
docker-compose up --build    → Sobe FastAPI + PostgreSQL
```

Deploy da imagem Docker para: Railway, Render, DigitalOcean, AWS ECS ou qualquer VPS.

---

## 15. FERRAMENTAS DE DESENVOLVIMENTO

| Ferramenta | Função |
|---|---|
| VS Code | IDE |
| Git + GitHub | Controlo de versão |
| GitHub Actions | CI/CD |
| Docker Desktop | Containers locais |
| DBeaver / pgAdmin | Gestão BD |
| Insomnia / Postman | Teste de APIs |
| Figma | Design UI/UX |
| Notion / Linear | Gestão de tarefas |

---

> **Este documento serve como guia de referência para toda a implementação da Plataforma Turing Tech.**
> Última actualização: Junho 2026
