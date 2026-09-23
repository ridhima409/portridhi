import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

const CERTS = [
  {
    title: 'Mastering C/C++',
    issuer: 'Radharaman Group of Institutes × Coding Thinker',
    category: 'Programming',
    img: '/images/cert-coding-thinker-c-cpp.jpg',
  },
  {
    title: 'C++ Through C',
    issuer: 'Sharma Computer Academy',
    category: 'Programming',
    img: '/images/cert-sca-cpp-through-c.jpg',
  },
  {
    title: 'Introduction to HTML',
    issuer: 'Sololearn',
    category: 'Web',
    img: '/images/cert-sololearn-html.jpg',
  },
  {
    title: 'Database Power: Seamless Tech Integration',
    issuer: 'SkillEcted Campus Program',
    category: 'Workshop',
    img: '/images/cert-skillected-database.jpg',
  },
]

const FILTERS = ['All', 'Programming', 'Web', 'Workshop']

export default function Certifications() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible = filter === 'All' ? CERTS : CERTS.filter((c) => c.category === filter)

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-heading">Certifications</h2>
        <span className="accent-underline" />
        <p className="section-sub">Courses and workshops completed alongside my degree. Filter by type, or click a card to view it full size.</p>

        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip${filter === f ? ' filter-chip--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="cert-grid">
          {visible.map((c) => (
            <button className="cert-card" key={c.title} onClick={() => setActive(c)}>
              <div className="cert-thumb-wrap">
                <img src={c.img} alt={`${c.title} certificate`} loading="lazy" />
              </div>
              <div className="cert-card-body">
                <h4>{c.title}</h4>
                <div className="issuer">{c.issuer}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
}
