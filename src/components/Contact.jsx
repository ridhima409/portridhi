export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          <div>
            <h2>Let's work together</h2>
            <p>Open to entry-level frontend and web development roles — reach out and let's talk.</p>
          </div>
          <div className="contact-links">
            <a className="btn-primary" href="mailto:ridhimad07@gmail.com">Email me</a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/ridhima-dubey-492107300" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <footer>© {new Date().getFullYear()} Ridhima Dubey. Built with React.</footer>
    </section>
  )
}
