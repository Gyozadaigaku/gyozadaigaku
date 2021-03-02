import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"
import cloudLeft from "../assets/distorted-clouds-left.svg"
import cloudRight from "../assets/distorted-clouds-right.svg"
const Work = ({ description, title, stack, url, image, index }) => {
  return (
    <article className="work">
      {index % 2 === 0 ? (
        <img
          className="cloud-left"
          src={cloudLeft}
          width=""
          height=""
          alt="distorted cloud left"
        />
      ) : (
        <img
          className="cloud-right"
          src={cloudRight}
          width=""
          height=""
          alt="distorted cloud right"
        />
      )}
      {image && (
        <Image fluid={image.childImageSharp.fluid} className="work--img" />
      )}
      <div className="work--info">
        <span className="work--number">0{index + 1}</span>
        <h3>{title || "default title"}</h3>
        <p className="work--desc">{description}</p>
        <div className="work--stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="work--links">
          <a href={url}>
            <FaShareSquare className="work--icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Work.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Work
