export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <h2 className="section-heading">About</h2>
          <span className="accent-underline" />
          <div className="about-text">
            <p>
              I'm a Computer Science Engineering student at Radharaman Engineering College
              (RGPV), building a strong foundation in programming, data structures, algorithms
              and database management alongside hands-on web development work.
            </p>
            <p>
              I enjoy turning ideas into responsive, user-friendly websites — from a women's
              safety awareness platform to a full e-commerce interface — and I'm comfortable
              across the stack of HTML, CSS, JavaScript and React, backed by VS Code and GitHub
              in my daily workflow.
            </p>
            <p>
              I'm looking for an entry-level software engineering or web development role where
              I can contribute to real products and keep sharpening my technical craft.
            </p>
          </div>
        </div>
        <div className="stat-list">
          <div className="stat">
            <div className="stat-num">6+</div>
            <div className="stat-label">Certifications &amp; workshops completed</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">Internships in UI/UX &amp; frontend</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">Web projects shipped</div>
          </div>
          <div className="stat">
            <div className="stat-num">B.Tech</div>
            <div className="stat-label">Computer Science, RGPV</div>
          </div>
        </div>
      </div>
    </section>
  )
}
