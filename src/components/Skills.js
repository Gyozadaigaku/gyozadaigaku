import React from "react"
import skills from "../constants/skills"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/skills.svg"

const Skills = () => {
  return (
    <section className="section bg-grey skills">
      <div className="section-title">
        <img className="section-almendra" src={title} alt="skills" />
        <img src={headingCurve} alt="heading curve" />
      </div>
      <div className="section--center skills--center">
        {skills.map(skill => {
          const { id, icon, title, text } = skill

          return (
            <article key={id} className="skill">
              {icon}
              <h4>{title}</h4>
              <img src={headingCurve} alt="heading curve" />
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
