import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaShareSquare } from "react-icons/fa"
import cloudLeft from "../assets/distorted-clouds-left.svg"
import cloudRight from "../assets/distorted-clouds-right.svg"
const Experience = ({ description, title, stack, url, image, index }) => {
  return (
    <article className="experience">
      {image && (
        <Image
          fluid={image.childImageSharp.fluid}
          className="experience--img"
        />
      )}
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
      <div className="experience--info">
        <span className="experience--number">0{index + 1}</span>
        <h3>{title || "default title"}</h3>
        <p className="experience--desc">{description}</p>
        <div className="experience--stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="experience--links">
          <a href={url}>
            <FaShareSquare className="experience--icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Experience
