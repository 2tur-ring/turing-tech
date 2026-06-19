import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'

export default function DashboardProfile() {
  const { user, updateUser } = useAuth()
  const [form, setForm] = useState({ nome: user?.nome || '', telefone: user?.telefone || '', empresa: user?.empresa || '' })
  const [saved, setSaved] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.put('/auth/me', form)
      updateUser(data)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {}
  }

  const set = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  return (
    <div>
      <div className="eyebrow">Área de Cliente</div>
      <h2 style={{ marginBottom: '1rem' }}>O meu Perfil</h2>
      <p className="lead" style={{ marginBottom: '2rem' }}>Atualize os seus dados pessoais e da empresa.</p>

      <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '560px', padding: '2rem' }}>
        {saved && <div style={{ background: 'rgba(52,211,153,.08)', border: '1px solid rgba(52,211,153,.3)', borderRadius: 'var(--r-sm)', padding: '.8rem', color: 'var(--success)', fontSize: '.88rem', marginBottom: '1.2rem' }}>Dados atualizados com sucesso.</div>}
        <div className="field" style={{ marginBottom: '1.2rem' }}>
          <label>Email</label>
          <input value={user?.email || ''} disabled style={{ opacity: .6 }} />
        </div>
        <div className="field" style={{ marginBottom: '1.2rem' }}>
          <label htmlFor="nome">Nome completo</label>
          <input type="text" id="nome" value={form.nome} onChange={set('nome')} required />
        </div>
        <div className="field" style={{ marginBottom: '1.2rem' }}>
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" id="telefone" value={form.telefone} onChange={set('telefone')} placeholder="+244 9XX XXX XXX" />
        </div>
        <div className="field" style={{ marginBottom: '1.6rem' }}>
          <label htmlFor="empresa">Empresa</label>
          <input type="text" id="empresa" value={form.empresa} onChange={set('empresa')} placeholder="Nome da sua empresa" />
        </div>
        <button type="submit" className="btn btn-primary">Guardar Alterações</button>
      </form>
    </div>
  )
}
