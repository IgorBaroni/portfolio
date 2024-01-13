import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiPhp,
  DiMysql,
  DiReact,
  DiAngularSimple,
  DiTypo3,
  DiScrum,
  DiPython,
  DiSqllite,
  DiMongodb
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJavascript1 /> },
  { id: "py", name: "Python", icon: <DiPython /> },
  { id: "angular", name: "Angular", icon: <DiAngularSimple /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sqlite", name: "SQLite", icon: <DiSqllite /> },
  { id: "mongo", name: "MongoDB", icon: <DiMongodb /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer