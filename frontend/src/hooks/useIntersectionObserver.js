import { useEffect, useRef } from 'react'

export default function useIntersectionObserver(className = 'in', options = { threshold: 0.1 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add(className); observer.unobserve(el) }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [className, options])
  return ref
}
