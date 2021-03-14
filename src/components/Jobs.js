import React from "react"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import checkMark from "../assets/check-mark.svg"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/featured-works.svg"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  console.log("value:", value)
  console.log("company:", company)

  return (
    <section className="section jobs">
      <div className="section-title">
        <img className="section-almendra" src={title} alt="featured works" />
        <img src={headingCurve} alt="heading curve" />
      </div>
      <div className="jobs--center">
        {/* btn container */}
        <div className="btn-container">
          <div class="selector"></div>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <img src={checkMark} alt="check mark" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        see more
      </Link>
    </section>
  )
}

export default Jobs
