import React from "react"
import Title from "./Title"
import Work from "./Work"
import { Link } from "gatsby"
const Works = ({ works, title, showLink }) => {
  return (
    <section className="section works">
      <Title title={title} />
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
