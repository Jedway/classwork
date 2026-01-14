import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root">
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
