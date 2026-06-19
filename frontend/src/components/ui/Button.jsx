import { Link } from 'react-router-dom'

export default function Button({ variant = 'primary', size, href, children, className = '', ...props }) {
  const cls = `btn btn-${variant}${size ? ` btn-${size}` : ''} ${className}`.trim()
  if (href) return <Link to={href} className={cls} {...props}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}
