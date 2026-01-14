import './footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <p>Made with ❤️ — <a href="mailto:you@example.com">you@example.com</a></p>
        <p className="muted">© {new Date().getFullYear()} Your Name</p>
      </div>
    </footer>
  )
}
