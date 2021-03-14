import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/latest-articles.svg"

export const Blogs = ({ blogs, showLink }) => {
  return (
    <section className="section blogs">
      <div className="section-title">
        <img className="section-almendra" src={title} alt="latest articles" />
        <img src={headingCurve} alt="heading curve" />
      </div>
      <div className="section--center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">
          blog
        </Link>
      )}
    </section>
  )
}
export default Blogs
