import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

const INTERNSHIPS = [
  {
    title: 'Front-End Development Internship',
    company: 'QSkill · SR India',
    duration: '6 Jul 2026 — 6 Aug 2026',
    summary: 'Active participant in the QSkill virtual internship program in Front-End Development.',
    detail: 'Worked through structured front-end development tasks as part of a virtual internship cohort, applying HTML, CSS and JavaScript fundamentals to practical exercises and building consistency with real-world front-end workflows.',
    img: '/images/cert-qskill-frontend-internship.jpg',
  },
  {
    title: 'UI/UX Design Internship',
    company: 'Astrid Infotech',
    duration: '11 May 2026 — 11 Jun 2026',
    summary: 'Completed a one-month internship as a UI/UX Intern, involved in UI/UX design activities.',
    detail: 'Contributed to UI/UX design activities, demonstrating creativity, dedication and professionalism. Recognized by the team for being sincere, hardworking and responsible throughout the internship.',
    img: '/images/cert-astrid-infotech-internship.jpg',
  },
]

export default function Internships() {
  const [openIndex, setOpenIndex] = useState(0)
  const [active, setActive] = useState(null)

  return (
    <section id="internships">
      <div className="container">
        <h2 className="section-heading">Internships</h2>
        <span className="accent-underline" />
        <p className="section-sub">Hands-on experience outside the classroom, from front-end builds to UI/UX design work.</p>

        <div className="intern-list">
          {INTERNSHIPS.map((item, i) => {
            const open = openIndex === i
            return (
              <div className={`intern-card${open ? ' intern-card--open' : ''}`} key={item.title}>
                <button className="intern-card-head" onClick={() => setOpenIndex(open ? -1 : i)}>
                  <div>
                    <h3>{item.title}</h3>
                    <div className="intern-company">{item.company} &middot; {item.duration}</div>
                  </div>
                  <span className="intern-chevron">{open ? '−' : '+'}</span>
                </button>
                {open && (
                  <div className="intern-card-body">
                    <p>{item.detail}</p>
                    <button className="btn-ghost btn-small" onClick={() => setActive(item)}>
                      View certificate
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Lightbox item={active} onClose={() => setActive(null)} />
    </section>
  )
}
