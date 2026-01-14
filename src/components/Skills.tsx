import './skills.css'

const skills = ['React', 'TypeScript', 'CSS', 'Accessibility', 'Testing', 'Vite']

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h3>Skills</h3>
        <ul className="skill-list">
          {skills.map((s) => (
            <li key={s} className="skill">
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
