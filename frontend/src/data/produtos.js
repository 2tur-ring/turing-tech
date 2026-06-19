export const OWN_PRODUCTS = [
  {
    slug: 'visao360',
    name: 'VISÃO 360',
    tag: 'Em operação',
    tagVariant: 'live',
    icon: 'boxes',
    subtitle: 'ERP Empresarial Completo',
    description: 'O Sistema Operacional Empresarial Africano. Um único sistema para gerir finanças, stock, vendas, equipas e clientes — desenhado para operar mesmo sem internet.',
    modules: ['01 · Finanças', '02 · Contabilidade', '03 · Compras', '04 · Vendas', '05 · RH', '06 · CRM', '07 · POS', '08 · Inventário'],
    features: [
      'Gestão financeira e contabilística completa',
      'Controlo de stock com alertas de rutura',
      'POS offline com sincronização automática',
      'CRM integrado com histórico do cliente',
      'Relatórios gerenciais em tempo real',
      'Suporte técnico 24/7'
    ]
  },
  {
    slug: 'smartai',
    name: 'VISÃO Genius AI',
    tag: 'Inteligência Artificial',
    tagVariant: 'ai',
    icon: 'cpu',
    subtitle: 'Assistente Inteligente de Gestão',
    description: 'O assistente que lê os dados do seu negócio e responde em português simples — sem dashboards complicados. Faça perguntas em linguagem natural e receba respostas imediatas.',
    features: [
      'Relatórios automáticos diários',
      'Consultas em linguagem natural',
      'Análise contínua de KPIs',
      'Sugestões de gestão baseadas em padrões',
      'Previsões de vendas e tendências',
      'Integração total com o VISÃO 360'
    ]
  },
  {
    slug: 'turing-cloud',
    name: 'Turing Cloud',
    tag: 'Cloud',
    tagVariant: 'soon',
    icon: 'cloud',
    subtitle: 'Plataforma Cloud Africana',
    description: 'Hospedagem, servidores virtuais e backup desenhados para empresas africanas. Infraestrutura confiável com suporte local.',
    features: [
      'Servidores Virtuais (VPS)',
      'Hospedagem de Sites e Apps',
      'Backup Automático',
      'Disaster Recovery',
      'Suporte Técnico Local'
    ]
  },
  {
    slug: 'turing-erp',
    name: 'Turing ERP',
    tag: 'Em desenvolvimento',
    tagVariant: 'soon',
    icon: 'settings',
    subtitle: 'ERP Standalone para África',
    description: 'Versão standalone do ERP Turing Tech para empresas que preferem uma solução independente e customizável.',
    features: [
      'Módulos financeiros completos',
      'Gestão de stock e inventário',
      'Gestão de vendas e clientes',
      'Relatórios e exportação de dados'
    ]
  },
  {
    slug: 'turing-crm',
    name: 'Turing CRM',
    tag: 'Em desenvolvimento',
    tagVariant: 'soon',
    icon: 'users',
    subtitle: 'Gestão de Clientes',
    description: 'Sistema de gestão de relacionamento com o cliente adaptado à realidade angolana, com funcionalidades offline.',
    features: [
      'Gestão de leads e oportunidades',
      'Histórico completo do cliente',
      'Campanhas de marketing',
      'Relatórios de vendas'
    ]
  },
  {
    slug: 'turing-hr',
    name: 'Turing HR',
    tag: 'Em desenvolvimento',
    tagVariant: 'soon',
    icon: 'briefcase',
    subtitle: 'Gestão de Recursos Humanos',
    description: 'Sistema completo de RH desde o recrutamento à folha de pagamento, adaptado à legislação angolana.',
    features: [
      'Gestão de colaboradores',
      'Controlo de presenças e férias',
      'Processamento de salários',
      'Recrutamento e integração'
    ]
  }
]

export const ROADMAP_ITEMS = [
  { phase: 'Fase 1', title: 'VISÃO 360 — ERP Base',     items: ['Módulos financeiros', 'Stock e inventário', 'POS offline', 'CRM básico'], status: 'building', date: 'T3 2026' },
  { phase: 'Fase 2', title: 'VISÃO Genius AI', items: ['Assistente IA integrado', 'Relatórios automáticos', 'Previsões de vendas'], status: 'research', date: 'T4 2026' },
  { phase: 'Fase 3', title: 'Turing Cloud', items: ['VPS e hospedagem', 'Backup e DR', 'CDN para downloads'], status: 'planned', date: 'T1 2027' },
  { phase: 'Fase 4', title: 'Turing Marketplace', items: ['Marketplace multisector', 'Pagamentos integrados', 'App móvel'], status: 'planned', date: 'T2 2027' },
  { phase: 'Fase 5', title: 'Expansão Vertical', items: ['Turing Education', 'Turing Health', 'Turing Government'], status: 'planned', date: 'T3 2027' }
]
