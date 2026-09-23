const SKILLS = [
  {
    title: 'Programming — C & C++',
    desc: 'Core programming concepts, data structures, algorithms and problem-solving, with clean and well-documented code.',
    tags: ['C', 'C++', 'DSA', 'OOP'],
  },
  {
    title: 'Web Development',
    desc: 'Building responsive, interactive, user-friendly interfaces with modern design and performance in mind.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Developer Tools',
    desc: 'Efficient coding and debugging, plus version control and collaboration on real projects.',
    tags: ['VS Code', 'GitHub', 'Git'],
  },
  {
    title: 'Frameworks',
    desc: 'Mobile-first, responsive UI built quickly and consistently across devices.',
    tags: ['Bootstrap', 'Responsive Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-heading">Skills</h2>
        <span className="accent-underline" />
        <p className="section-sub">What I reach for when I'm building something, from the language underneath to the interface on top.</p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="pill-row">
                {s.tags.map((t) => <span className="pill" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
