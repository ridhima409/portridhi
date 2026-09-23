import ColorPicker from './ColorPicker.jsx'

export default function Hero({ accent, setAccent }) {
  return (
    <header className="hero hero--nophoto">
      <div className="container hero-center">
        <div className="hero-role">&lt;RidhimaDubey.portfolio /&gt;</div>
        <h1 className="hero-name">Ridhima Dubey</h1>
        <div className="hero-role-tag">Frontend Developer Portfolio</div>
        <p className="hero-tagline hero-tagline--center">
          Computer Science graduate who builds responsive, accessible web interfaces
          with HTML, CSS, JavaScript and React — with a solid foundation in C and C++
          problem-solving underneath.
        </p>
        <div className="hero-actions hero-actions--center">
          <a href="#projects" className="btn-primary">View projects</a>
          <a href="#internships" className="btn-ghost">Internships</a>
          <a href="#certifications" className="btn-ghost">Certifications</a>
        </div>
        <div className="hero-meta hero-meta--center">
          <a href="mailto:ridhimad07@gmail.com">ridhimad07@gmail.com</a>
          <a href="tel:+917067459831">+91 70674 59831</a>
          <span>Bhopal, India</span>
          <a href="https://www.linkedin.com/in/ridhima-dubey-492107300" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="hero-swatches">
          <ColorPicker accent={accent} setAccent={setAccent} />
        </div>
      </div>
    </header>
  )
}
