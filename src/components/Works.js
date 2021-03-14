import React from "react"
import Work from "./Work"
import { Link } from "gatsby"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/experience.svg"

const Works = ({ works, showLink }) => {
  return (
    <section className="section works">
      <div className="section-title">
        <img className="section-almendra" src={title} alt="experience" />
        <img src={headingCurve} alt="heading curve" />
      </div>
      <div className="section--center works-center">
        {works.map((work, index) => {
          return <Work key={work.id} index={index} {...work} />
        })}
      </div>
      {showLink && (
        <Link to="/works" className="btn center-btn">
          see more
        </Link>
      )}
    </section>
  )
}

export default Works
