import './header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-row">
        <h1 className="brand">Your Name</h1>
        <nav className="site-nav" aria-label="Main Navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
