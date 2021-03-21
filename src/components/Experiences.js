import React from "react"
import Experience from "./Experience"
import { Link } from "gatsby"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/experience.svg"

const Experiences = ({ experiences, showLink }) => {
  return (
    <section className="section experiences">
      <div className="section-title">
        <img className="section-almendra" src={title} alt="experience" />
        <img src={headingCurve} alt="heading curve" />
      </div>
      <div className="section--center experiences-center">
        {experiences.map((experience, index) => {
          return (
            <Experience key={experience.id} index={index} {...experience} />
          )
        })}
      </div>
      {showLink && (
        <Link to="/experiences" className="btn center-btn">
          see more
        </Link>
      )}
    </section>
  )
}

export default Experiences
