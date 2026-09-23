const PROJECTS = [
  {
    date: '07/2025 — Present',
    title: 'Women Saver Website',
    role: 'Awareness & safety information platform',
    desc: 'A responsive, user-friendly website promoting women\u2019s safety — safety tips, emergency contacts and awareness resources in an easy-to-navigate format, built with accessibility and cross-browser compatibility in mind.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    date: '02/2025 — 04/2025',
    title: 'E-commerce Website',
    role: 'Online shopping platform, responsive design',
    desc: 'A fully functional e-commerce site with product listings, category-based navigation and an intuitive UI for seamless browsing, focused on mobile responsiveness and cross-browser compatibility.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <span className="accent-underline" />
        <p className="section-sub">Two builds where I took an idea from layout to a working, responsive interface.</p>
        <div className="project-list">
          {PROJECTS.map((p) => (
            <div className="project-row" key={p.title}>
              <div className="project-date">{p.date}</div>
              <div>
                <h3>{p.title}</h3>
                <div className="role">{p.role}</div>
                <p className="desc">{p.desc}</p>
              </div>
              <div className="project-tags">
                {p.tags.map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
