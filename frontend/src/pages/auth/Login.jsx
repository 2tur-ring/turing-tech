import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import GoogleButton from '../../components/ui/GoogleButton'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch {
      setError('Email ou palavra-passe incorretos')
    }
  }

  return (
    <>
      <SEO title="Entrar" noindex={true} />
      <section className="page-header" style={{ paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ maxWidth: '440px', margin: '0 auto' }}>
          <div className="reveal in">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Autenticação</div>
            <h1 style={{ textAlign: 'center', marginBottom: '.5rem' }}>Entrar na sua conta</h1>
            <p className="lead" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>Aceda à área de cliente ou ao painel de gestão.</p>
          </div>

          <div className="card" style={{ padding: '2rem' }}>
            <GoogleButton />
            <div className="auth-divider">ou</div>
            <form onSubmit={handleSubmit}>
              {error && <div style={{ background: 'rgba(255,107,107,.1)', border: '1px solid rgba(255,107,107,.3)', borderRadius: 'var(--r-sm)', padding: '.8rem', color: 'var(--danger)', fontSize: '.88rem', marginBottom: '1.2rem' }}>{error}</div>}
              <div className="field" style={{ marginBottom: '1.2rem' }}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.co.ao" required />
              </div>
              <div className="field" style={{ marginBottom: '1.6rem' }}>
                <label htmlFor="password">Palavra-passe</label>
                <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">Entrar</button>
              <p className="form-note" style={{ textAlign: 'center', marginTop: '1.2rem' }}>
                Ainda não tem conta? <Link to="/register" style={{ color: 'var(--accent)' }}>Criar conta</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
