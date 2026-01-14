import './hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-inner">
        <h2 className="name">Billy Billy</h2>
        <p className="tagline">Frontend Developer — Building fast, accessible, and delightful web experiences in javascript.</p>
        <div className="hero-ctas">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>
  )
}
