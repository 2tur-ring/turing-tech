import { useState, useEffect } from 'react'
import api from '../../services/api'

export default function DashboardTickets() {
  const [tickets, setTickets] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ subject: '', message: '', priority: 'normal' })

  useEffect(() => { api.get('/tickets').then(({ data }) => setTickets(data)).catch(() => {}) }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/tickets', form)
      setTickets(prev => [data, ...prev])
      setForm({ subject: '', message: '', priority: 'normal' })
      setShowForm(false)
    } catch {}
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <div className="eyebrow">Área de Cliente</div>
          <h2 style={{ marginBottom: '.3rem' }}>Tickets de Suporte</h2>
          <p className="lead" style={{ marginBottom: 0 }}>Acompanhe os seus pedidos de suporte.</p>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowForm(o => !o)}>{showForm ? 'Cancelar' : 'Novo Ticket'}</button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
          <div className="form-grid">
            <div className="field full">
              <label>Assunto</label>
              <input value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="Resumo do problema" required />
            </div>
            <div className="field">
              <label>Prioridade</label>
              <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))}>
                <option value="normal">Normal</option>
                <option value="high">Alta</option>
                <option value="urgent">Urgente</option>
              </select>
            </div>
            <div className="field full">
              <label>Mensagem</label>
              <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Descreva o seu problema em detalhe..." required />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-1">Enviar Ticket</button>
        </form>
      )}

      {tickets.length === 0 ? (
        <div className="card"><p className="mb-0" style={{ textAlign: 'center', padding: '2rem 0' }}>Nenhum ticket encontrado.</p></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
          {tickets.map(t => (
            <div key={t.id} className="roadmap-row" style={{ gridTemplateColumns: '1fr auto' }}>
              <div>
                <h4>{t.subject}</h4>
                <p style={{ fontSize: '.88rem', marginTop: '.3rem' }}>{t.message.slice(0, 120)}{t.message.length > 120 ? '...' : ''}</p>
                <div className="mono" style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>{new Date(t.created_at).toLocaleDateString('pt-PT')}</div>
              </div>
              <div className={`status-pill ${t.status === 'open' ? 'building' : t.status === 'closed' ? 'planned' : ''}`}>
                {t.status === 'open' ? 'Aberto' : t.status === 'closed' ? 'Fechado' : t.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
