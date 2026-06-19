export default function Eyebrow({ variant, children }) {
  return <div className={`eyebrow${variant ? ` ${variant}` : ''}`}>{children}</div>
}
