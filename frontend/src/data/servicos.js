export const SERVICE_GROUPS = [
  {
    key: 'software',
    label: 'Software & Plataformas',
    categories: [
      {
        id: 1, name: 'Desenvolvimento de Software',
        description: 'Sistemas empresariais e especializados construídos à medida do seu negócio.',
        items: ['ERP — Sistema Integrado de Gestão', 'CRM — Gestão de Clientes', 'RH e Folha Salarial', 'Gestão Financeira', 'Gestão de Inventário', 'Gestão de Compras', 'Gestão de Vendas', 'Gestão de Produção', 'Gestão de Frota', 'Gestão de Contratos', 'Sistemas Hospitalares', 'Sistemas Escolares', 'Sistemas Universitários', 'Sistemas Hoteleiros', 'Sistemas para Academias', 'Sistemas para Igrejas', 'Sistemas para ONG', 'Sistemas para Bancos', 'Sistemas para Seguradoras', 'Sistemas para Cooperativas']
      },
      {
        id: 2, name: 'Plataformas Digitais',
        description: 'Marketplaces e plataformas online escaláveis para qualquer setor.',
        items: ['Marketplace Venda de Carros', 'Marketplace Venda de Motas', 'Marketplace Venda de Imóveis', 'Comércio Eletrónico', 'Marketplace B2B', 'Marketplace Agrícola', 'E-learning', 'Telemedicina', 'Streaming', 'Gestão de Eventos', 'Recrutamento e Emprego', 'Freelancers', 'Delivery', 'Reservas Online']
      },
      {
        id: 3, name: 'Desenvolvimento Web',
        description: 'Sites, portais e lojas online com performance, segurança e SEO nativos.',
        items: ['Websites Corporativos', 'Portais Institucionais', 'Lojas Online', 'Landing Pages', 'Portais Governamentais', 'Portais Educacionais', 'Portais Hospitalares', 'Intranets', 'Extranets', 'Sistemas Web Personalizados']
      },
      {
        id: 4, name: 'Desenvolvimento Mobile',
        description: 'Aplicações Android e iOS para empresas, fintechs, educação e governo.',
        items: ['Android — Aplicações Empresariais', 'Android — Aplicações Comerciais', 'Android — Aplicações Financeiras', 'Android — Aplicações Educacionais', 'iOS — Aplicações Empresariais', 'iOS — Aplicações Premium', 'iOS — Aplicações Governamentais']
      }
    ]
  },
  {
    key: 'ia-cloud',
    label: 'IA & Cloud',
    categories: [
      {
        id: 5, name: 'Inteligência Artificial',
        description: 'Assistentes inteligentes, automação e IA aplicada a todos os setores.',
        items: ['Chatbots Empresariais', 'Atendimento Automático', 'Assistentes Virtuais', 'Copilotos Corporativos', 'Análise de Dados', 'Previsão de Vendas', 'Previsão Financeira', 'Automação Inteligente', 'Visão Computacional', 'Reconhecimento de Documentos', 'IA para Recursos Humanos', 'IA para Saúde', 'IA para Educação']
      },
      {
        id: 6, name: 'Cloud Computing',
        description: 'Infraestrutura cloud completa: migração, servidores, backup e disaster recovery.',
        items: ['Migração para Cloud', 'Infraestrutura Cloud', 'Servidores Virtuais', 'Backup em Nuvem', 'Disaster Recovery', 'Cloud Privada', 'Cloud Híbrida', 'Monitorização Cloud']
      },
      {
        id: 7, name: 'Cibersegurança',
        description: 'Proteção total com auditoria, testes de intrusão e SOC 24/7.',
        items: ['Auditoria de Segurança', 'Testes de Intrusão', 'Segurança de Redes', 'Segurança de Aplicações', 'Gestão de Vulnerabilidades', 'Centro de Operações de Segurança (SOC)', 'Monitorização 24/7', 'Proteção de Infraestruturas Críticas']
      },
      {
        id: 8, name: 'Infraestrutura Tecnológica',
        description: 'Redes, data centers, servidores e virtualização para empresas em crescimento.',
        items: ['Instalação de Redes', 'Redes Corporativas', 'Wi-Fi Empresarial', 'Data Centers', 'Servidores', 'Virtualização', 'Monitorização']
      }
    ]
  },
  {
    key: 'dados',
    label: 'Transformação & Dados',
    categories: [
      {
        id: 9, name: 'Transformação Digital',
        description: 'Consultoria, digitalização e estratégia para levar o seu negócio ao próximo nível.',
        items: ['Consultoria Digital', 'Digitalização de Processos', 'Automação Empresarial', 'Modernização de Sistemas', 'Estratégia Tecnológica', 'Planeamento de TI']
      },
      {
        id: 10, name: 'Análise de Dados & BI',
        description: 'Dashboards executivos, KPIs, Big Data e relatórios inteligentes para decisões mais rápidas.',
        items: ['Dashboards Executivos', 'Indicadores de Gestão (KPI)', 'Business Intelligence', 'Big Data', 'Data Warehouse', 'Data Analytics', 'Relatórios Inteligentes']
      },
      {
        id: 11, name: 'Internet das Coisas (IoT)',
        description: 'Cidades e agricultura inteligente, monitorização industrial e gestão energética.',
        items: ['Cidades Inteligentes', 'Agricultura Inteligente', 'Monitorização Industrial', 'Monitorização Ambiental', 'Gestão Energética', 'Rastreamento de Veículos']
      }
    ]
  },
  {
    key: 'governo',
    label: 'Governo & Setor Público',
    categories: [
      {
        id: 12, name: 'Serviços para Governos',
        description: 'Governo digital, smart cities e gestão pública com tecnologia de ponta.',
        items: ['Portal do Cidadão', 'Serviços Públicos Online', 'Gestão Tributária', 'Gestão Municipal', 'Gestão Eleitoral', 'Gestão de Documentos', 'Smart Cities — Trânsito Inteligente', 'Smart Cities — Segurança Urbana', 'Smart Cities — Iluminação Inteligente']
      },
      {
        id: 13, name: 'Serviços para Educação',
        description: 'Ecossistema educacional completo: gestão, EAD, bibliotecas e portais académicos.',
        items: ['Gestão Escolar', 'Gestão Universitária', 'Ensino à Distância', 'Bibliotecas Digitais', 'Avaliações Online', 'Portais Académicos']
      },
      {
        id: 14, name: 'Serviços para Saúde',
        description: 'Prontuário eletrónico, telemedicina, gestão hospitalar e laboratorial.',
        items: ['Prontuário Eletrónico', 'Gestão Hospitalar', 'Telemedicina', 'Gestão de Farmácias', 'Agendamento Online', 'Gestão Laboratorial']
      },
      {
        id: 15, name: 'Serviços para Agricultura',
        description: 'Gestão agrícola, monitorização de culturas e marketplace para o agronegócio.',
        items: ['Gestão Agrícola', 'Monitorização de Culturas', 'Agricultura de Precisão', 'Marketplace Agrícola', 'Gestão Pecuária']
      }
    ]
  },
  {
    key: 'financas',
    label: 'Finanças & Marketing',
    categories: [
      {
        id: 16, name: 'Serviços para Bancos & Fintech',
        description: 'Carteiras digitais, pagamentos móveis, core banking e open banking.',
        items: ['Carteiras Digitais', 'Pagamentos Eletrónicos', 'Mobile Banking', 'Core Banking', 'Sistemas de Crédito', 'Open Banking']
      },
      {
        id: 17, name: 'Design & Experiência Digital',
        description: 'UI/UX, branding e design de produtos digitais com foco no utilizador.',
        items: ['UI/UX Design', 'Design Gráfico', 'Branding', 'Identidade Visual', 'Prototipagem', 'Design de Produtos Digitais']
      },
      {
        id: 18, name: 'Marketing Digital',
        description: 'SEO, redes sociais, publicidade e automação para o mercado africano.',
        items: ['SEO', 'Gestão de Redes Sociais', 'Publicidade Digital', 'Email Marketing', 'Automação de Marketing', 'Produção de Conteúdo']
      }
    ]
  },
  {
    key: 'capacitacao',
    label: 'Capacitação & Inovação',
    categories: [
      {
        id: 19, name: 'Formação e Capacitação',
        description: 'Formação presencial e online em tecnologia, IA, programação e cibersegurança.',
        items: ['Formação em Tecnologia', 'Formação em IA', 'Formação em Programação', 'Formação em Cibersegurança', 'Formação Corporativa', 'Academia Turing Tech']
      },
      {
        id: 20, name: 'Pesquisa e Inovação',
        description: 'Laboratórios de IA, robótica e IoT para impulsionar a inovação empresarial.',
        items: ['Laboratório de IA', 'Laboratório de Robótica', 'Laboratório IoT', 'Pesquisa Tecnológica', 'Desenvolvimento de Patentes', 'Inovação Empresarial']
      },
      {
        id: 21, name: 'Produtos Próprios',
        description: 'O ecossistema de produtos Turing Tech — do ERP ao marketplace, tudo integrado.',
        items: ['VISÃO 360 — Sistema Operacional Empresarial', 'GENIUS AI — Assistente Inteligente', 'Turing Cloud — Plataforma Cloud Africana', 'Turing ERP — ERP Completo para África', 'Turing CRM — Gestão de Clientes', 'Turing HR — Gestão de RH', 'Turing Education — Ecossistema Educacional', 'Turing Health — Ecossistema de Saúde', 'Turing Government — Governo Digital', 'Turing Marketplace — Comércio Digital']
      }
    ]
  }
]

export const ALL_SERVICES = SERVICE_GROUPS.flatMap(g => g.categories)
