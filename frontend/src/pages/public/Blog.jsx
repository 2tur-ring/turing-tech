import SEO from '../../components/seo/SEO'
import { useState } from 'react'
import { BLOG_POSTS } from '../../data/blog-posts'
import SectionHeader from '../../components/ui/SectionHeader'
import CTABand from '../../components/ui/CTABand'
import Breadcrumb from '../../components/ui/Breadcrumb'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const categories = ['Todos', ...new Set(BLOG_POSTS.map(p => p.category))]

export default function Blog() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter)

  return (
    <>
      <SEO title="Blog" description="Artigos sobre ERP, tecnologia, gestão empresarial e inovação em Angola." />
      <section className="page-header">
        <div className="container">
          <div className="reveal in">
            <Breadcrumb items={[{ label: 'Início', href: '/' }, { label: 'Blog' }]} />
            <div className="eyebrow teal">Blog Tecnológico</div>
            <h1>Artigos sobre <span className="accent-2">tecnologia</span>, IA e gestão</h1>
            <p className="lead">Conteúdo produzido pela equipa Turing Tech para ajudar empresas angolanas a tomar melhores decisões tecnológicas.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="filter-row">
            {categories.map(c => (
              <button key={c} className={`filter-pill${filter === c ? ' active' : ''}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="grid-3">
            {filtered.map(post => (
              <article key={post.slug} className="blog-card card">
                <div className="blog-thumb" style={{ height: '170px', borderRadius: 'var(--r-md)', border: '1px solid var(--border)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '38px', height: '38px', color: 'var(--text-dim)' }}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                </div>
                <div className="cat mono">{post.category}</div>
                <h3 style={{ marginBottom: '.6rem', fontSize: '1.1rem' }}>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="date" style={{ marginTop: 'auto', paddingTop: '1rem', fontFamily: 'var(--font-mono)', fontSize: '.75rem', color: 'var(--text-dim)' }}>{post.date} · {post.author}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CTABand
            title="Quer receber os nossos artigos?"
            description="Subscreva a newsletter e receba conteúdos sobre tecnologia, gestão e IA para empresas angolanas."
            primaryHref="/contact"
            primaryLabel="Subscrever Newsletter"
          />
        </div>
      </section>
    </>
  )
}
