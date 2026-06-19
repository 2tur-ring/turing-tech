import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Olá! Sou o VISÃO Genius AI. Como posso ajudar?' }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const send = async () => {
    if (!input.trim()) return
    const userMsg = input.trim()
    setInput('')
    setMessages(p => [...p, { role: 'user', text: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('/api/ai/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg }) })
      const data = await res.json()
      setMessages(p => [...p, { role: 'assistant', text: data.response }])
    } catch {
      setMessages(p => [...p, { role: 'assistant', text: '❌ Erro de ligação ao servidor.' }])
    }
    setLoading(false)
  }

  return (
    <>
      <button onClick={() => setOpen(o => !o)} style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 999, width: '52px', height: '52px', borderRadius: '50%', background: 'var(--accent)', color: '#000', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,.3)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
      </button>
      {open && (
        <div style={{ position: 'fixed', bottom: '5rem', right: '1.5rem', zIndex: 999, width: '360px', maxHeight: '500px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 40px rgba(0,0,0,.35)', overflow: 'hidden' }}>
          <div style={{ padding: '.8rem 1rem', borderBottom: '1px solid var(--border)', fontWeight: 600, fontSize: '.92rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span><span style={{ color: 'var(--accent)' }}>✦</span> VISÃO Genius AI</span>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}>✕</button>
          </div>
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '.7rem', minHeight: '200px', maxHeight: '340px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', padding: '.6rem .9rem', borderRadius: m.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px', background: m.role === 'user' ? 'var(--accent)' : 'var(--bg-soft)', color: m.role === 'user' ? '#000' : 'inherit', fontSize: '.88rem', lineHeight: 1.5, whiteSpace: 'pre-wrap' }}>{m.text}</div>
            ))}
            {loading && <div style={{ alignSelf: 'flex-start', padding: '.6rem .9rem', borderRadius: '12px 12px 12px 4px', background: 'var(--bg-soft)', fontSize: '.88rem', color: 'var(--text-dim)' }}>A pensar...</div>}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: '.7rem 1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '.5rem' }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} placeholder="Pergunte algo..." style={{ flex: 1, padding: '.55rem .8rem', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'inherit', fontSize: '.88rem', outline: 'none' }} />
            <button onClick={send} disabled={loading} style={{ padding: '.55rem .9rem', background: 'var(--accent)', color: '#000', border: 'none', borderRadius: 'var(--r-sm)', fontWeight: 600, cursor: 'pointer', fontSize: '.88rem' }}>→</button>
          </div>
        </div>
      )}
    </>
  )
}
