import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import heroImg from "../assets/hero-img.svg"
import mysteriousTriangle from "../assets/mysterious-triangle.svg"
import heroCurve from "../assets/hero-curve.svg"
import itsme from "../assets/I-am-Jun.svg"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section--center hero--center">
        <article className="hero--info">
          <div>
            <img
              className="hero--info-curve"
              src={heroCurve}
              alt="hero curve"
            />
            <img className="hero--info-imjun" src={itsme} alt="I'm Jun" />
            <h4>
              A UI/UX designer <br className="break-for-sp" />
              based in Japan
            </h4>
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
        <img
          className="hero-sub--img"
          src={mysteriousTriangle}
          alt="mysterious triangle"
        />
      </div>
    </header>
  )
}

export default Hero
