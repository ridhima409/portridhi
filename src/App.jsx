import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Internships from './components/Internships.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import { hexToRgb } from './theme.js'

export default function App() {
  const [accent, setAccent] = useState('#6c63ff')

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.documentElement.style.setProperty('--accent-soft', `rgba(${hexToRgb(accent)}, 0.14)`)
  }, [accent])

  return (
    <>
      <Navbar />
      <Hero accent={accent} setAccent={setAccent} />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Internships />
      <Certifications />
      <Contact />
    </>
  )
}
