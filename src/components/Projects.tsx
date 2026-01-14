import { projects } from '../data/projects'
import './projects.css'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h3>Selected Projects</h3>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.id} className="card project-card">
              <h4>{p.title}</h4>
              <p className="muted">{p.description}</p>
              <p className="tech">{p.tech.join(' • ')}</p>
              <div className="card-ctas">
                {p.link && (
                  <a className="link" href={p.link} target="_blank" rel="noreferrer">Live</a>
                )}
                {p.repo && (
                  <a className="link" href={p.repo} target="_blank" rel="noreferrer">Repo</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
