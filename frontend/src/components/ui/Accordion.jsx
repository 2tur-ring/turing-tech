import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(null)
  return items.map((item, i) => (
    <div key={i} className={`accordion-item${open === i ? ' open' : ''}`}>
      <button className="accordion-trigger" onClick={() => setOpen(open === i ? null : i)}>
        {item.title}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
      </button>
      <div className="accordion-panel" style={{ maxHeight: open === i ? '600px' : '0' }}>
        <div className="accordion-panel-inner">{item.content}</div>
      </div>
    </div>
  ))
}
