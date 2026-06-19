import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>}
          {item.href ? <Link to={item.href}>{item.label}</Link> : <span>{item.label}</span>}
        </span>
      ))}
    </div>
  )
}
