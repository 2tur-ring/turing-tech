import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import GoogleButton from '../../components/ui/GoogleButton'

export default function Register() {
  const [form, setForm] = useState({ nome: '', email: '', password: '', telefone: '', empresa: '' })
  const [error, setError] = useState('')
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await register(form)
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setError(err.response?.data?.detail || 'Erro ao criar conta')
    }
  }

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  return (
    <>
      <SEO title="Criar Conta" noindex={true} />
      <section className="page-header" style={{ paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div className="reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Registo</div>
            <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Criar conta</h1>
            <p className="lead" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>Registe-se para aceder à área de cliente e aos produtos Turing Tech.</p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <GoogleButton text="Registar com Google" />
            <div className="auth-divider">ou</div>
            <form onSubmit={handleSubmit}>
              {error && <div style={{ background: 'rgba(255,107,107,.1)', border: '1px solid rgba(255,107,107,.3)', borderRadius: 'var(--r-sm)', padding: '.8rem', color: 'var(--danger)', fontSize: '.88rem', marginBottom: '1.2rem' }}>{error}</div>}
              <div className="form-grid">
                <div className="field full">
                  <label htmlFor="nome">Nome completo</label>
                  <input type="text" id="nome" value={form.nome} onChange={set('nome')} placeholder="O seu nome" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" value={form.email} onChange={set('email')} placeholder="seu@email.co.ao" required />
                </div>
                <div className="field">
                  <label htmlFor="password">Palavra-passe</label>
                  <input type="password" id="password" value={form.password} onChange={set('password')} placeholder="Mínimo 6 caracteres" required minLength={6} />
                </div>
                <div className="field">
                  <label htmlFor="telefone">Telefone</label>
                  <input type="tel" id="telefone" value={form.telefone} onChange={set('telefone')} placeholder="+244 9XX XXX XXX" />
                </div>
                <div className="field full">
                  <label htmlFor="empresa">Empresa (opcional)</label>
                  <input type="text" id="empresa" value={form.empresa} onChange={set('empresa')} placeholder="Nome da sua empresa" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg mt-1">Criar Conta</button>
              <p className="form-note" style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                Já tem conta? <Link to="/login" style={{ color: 'var(--accent)' }}>Entrar</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
