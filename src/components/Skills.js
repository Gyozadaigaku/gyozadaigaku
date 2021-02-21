import React from "react"
import Title from "./Title"
import skills from "../constants/skills"
import headingCurve from "../assets/heading-curve.svg"
const Skills = () => {
  return (
    <section className="section bg-grey skills">
      <Title title="skills" />
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
