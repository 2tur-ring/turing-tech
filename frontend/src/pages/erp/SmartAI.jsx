import { useState } from 'react'

export default function SmartAI() {
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Olá! Sou o VISÃO Genius AI. Posso gerar relatórios, analisar dados do seu negócio ou responder a perguntas sobre o ERP.' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [reportModule, setReportModule] = useState('general')

  const sendMessage = async () => {
    if (!input.trim()) return
    const msg = input.trim()
    setInput('')
    setMessages(p => [...p, { role: 'user', text: msg }])
    setLoading(true)
    try {
      const res = await fetch('/api/ai/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: msg }) })
      const data = await res.json()
      setMessages(p => [...p, { role: 'assistant', text: data.response }])
    } catch { setMessages(p => [...p, { role: 'assistant', text: '❌ Erro de ligação.' }]) }
    setLoading(false)
  }

  const generateReport = async () => {
    setMessages(p => [...p, { role: 'user', text: `Gerar relatório: ${reportModule}` }])
    setLoading(true)
    try {
      const res = await fetch('/api/ai/report', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ module: reportModule, period: 'este mês' }) })
      const data = await res.json()
      setMessages(p => [...p, { role: 'assistant', text: data.response }])
    } catch { setMessages(p => [...p, { role: 'assistant', text: '❌ Erro ao gerar relatório.' }]) }
    setLoading(false)
  }

  return (
    <div>
      <div className="eyebrow">VISÃO 360 ERP</div>
      <h2 style={{ marginBottom: '.3rem' }}>VISÃO Genius AI</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Assistente inteligente para o seu negócio.</p>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <select value={reportModule} onChange={e => setReportModule(e.target.value)} style={{ padding: '.6rem 1rem', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'inherit', fontSize: '.88rem' }}>
          <option value="general">Relatório Geral</option>
          <option value="vendas">Relatório de Vendas</option>
          <option value="financas">Relatório Financeiro</option>
          <option value="stock">Relatório de Stock</option>
        </select>
        <button className="btn btn-secondary btn-sm" onClick={generateReport} disabled={loading}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          Gerar Relatório
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.2rem', borderBottom: '1px solid var(--border)', fontWeight: 600 }}>Chat com VISÃO Genius AI</div>
        <div style={{ padding: '1rem 1.2rem', minHeight: '300px', maxHeight: '500px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', padding: '.7rem 1rem', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.role === 'user' ? 'var(--accent)' : 'var(--bg-soft)', color: m.role === 'user' ? '#000' : 'inherit', lineHeight: 1.6, whiteSpace: 'pre-wrap', fontSize: '.92rem' }}>{m.text}</div>
          ))}
          {loading && <div style={{ alignSelf: 'flex-start', padding: '.7rem 1rem', borderRadius: '16px 16px 16px 4px', background: 'var(--bg-soft)', color: 'var(--text-dim)' }}>A processar...</div>}
        </div>
        <div style={{ padding: '.8rem 1.2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '.5rem' }}>
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Faça uma pergunta sobre o seu negócio..." style={{ flex: 1, padding: '.65rem 1rem', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'inherit', fontSize: '.9rem', outline: 'none' }} />
          <button onClick={sendMessage} disabled={loading} className="btn btn-primary btn-sm">Enviar</button>
        </div>
      </div>
    </div>
  )
}
