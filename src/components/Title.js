import React from "react"
import headingCurve from "../assets/heading-curve.svg"

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title || "default title"}</h2>
      <img src={headingCurve} alt="heading curve" />
    </div>
  )
}

export default Title
