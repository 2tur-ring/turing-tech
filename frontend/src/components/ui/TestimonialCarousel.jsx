import { useRef, useEffect } from 'react'

export default function TestimonialCarousel({ items }) {
  const trackRef = useRef(null)
  const dotsRef = useRef(null)
  const idx = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const dots = dotsRef.current
    if (!track || !dots) return
    const slides = Array.from(track.querySelectorAll('.testimonial-slide'))
    if (!slides.length) return
    const update = () => {
      track.style.transform = `translateX(-${idx.current * 100}%)`
      dots.querySelectorAll('button').forEach((btn, i) => btn.classList.toggle('active', i === idx.current))
    }
    dots.innerHTML = slides.map((_, i) => `<button${i === 0 ? ' class="active"' : ''}></button>`).join('')
    const prev = document.querySelector('.carousel-arrow.prev')
    const next = document.querySelector('.carousel-arrow.next')
    const goPrev = () => { idx.current = (idx.current - 1 + slides.length) % slides.length; update() }
    const goNext = () => { idx.current = (idx.current + 1) % slides.length; update() }
    prev?.addEventListener('click', goPrev)
    next?.addEventListener('click', goNext)
    return () => { prev?.removeEventListener('click', goPrev); next?.removeEventListener('click', goNext) }
  }, [])

  return (
    <div className="testimonial-track-wrap">
      <div className="testimonial-track" ref={trackRef} style={{ transition: 'transform .45s var(--ease)', display: 'flex' }}>
        {items.map((t, i) => (
          <div key={i} className="testimonial-slide" style={{ minWidth: '100%', display: 'grid' }}>
            <div className="avatar-block">{t.initials}</div>
            <div>
              <blockquote>{t.quote}</blockquote>
              <cite>{t.name} &middot; <b>{t.company}</b></cite>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-arrow prev" aria-label="Anterior">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 5 5 12 12 19" /></svg>
        </button>
        <div className="carousel-dots" ref={dotsRef} />
        <button className="carousel-arrow next" aria-label="Seguinte">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </button>
      </div>
    </div>
  )
}
