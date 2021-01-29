import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import heroImg from "../assets/hero-img.svg"
import heroCurve from "../assets/hero-curve.svg"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.svg" }) {
      publicURL
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const { publicURL } = data.file
  return (
    <header className="hero">
      <div className="section--center hero--center">
        <article className="hero--info">
          <div>
            <img src={heroCurve} alt="hero curve" />
            <h1>i'm jun</h1>
            <h4>A UI/UX designer based in Japan</h4>
            <Link to="/contact" className="btn">
              say hello
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img
          className="hero--img"
          src={heroImg}
          width=""
          height=""
          alt="hero img"
        />
      </div>
    </header>
  )
}

export default Hero
