const ITEMS = [
  {
    date: '07/2022 — Present',
    title: 'B.Tech, Computer Science & Engineering',
    place: 'Radharaman Engineering College, RGPV',
    desc: 'Comprehensive curriculum covering programming, data structures, algorithms, database management and web development, with hands-on academic projects.',
  },
  {
    date: '07/2020 — 06/2021',
    title: 'Higher Secondary School, 12th (Science)',
    place: 'Govt. Girls School, Sagar, MP',
    desc: 'Focused on Science stream, building a strong foundation in mathematics, physics and computer fundamentals.',
  },
  {
    date: '07/2018 — 06/2019',
    title: 'High School, 10th',
    place: 'SSM Banda, Sagar',
    desc: 'Completed secondary education with distinction, developing strong academic fundamentals and problem-solving skills.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <span className="accent-underline" />
        <div className="timeline">
          {ITEMS.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <div className="place">{item.place}</div>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
