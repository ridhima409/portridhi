export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="nav-brand-dot" />
          Ridhima Dubey <span className="nav-brand-sub">· Portfolio</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#internships">Internships</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  )
}
