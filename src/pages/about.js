import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import headingCurve from "../assets/heading-curve.svg"
import title from "../assets/about-me.svg"
import ripples07 from "../assets/ripples-07.svg"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, image } = nodes[0]

  return (
    <Layout>
      <SEO title="About Me" description="about jun" />
      <section className="about-page">
        <div className="section-title">
          <img className="section-almendra" src={title} alt="about me" />
          <img src={headingCurve} alt="heading curve" />
        </div>
        <div className="section--center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            {/* <Title title={title} /> */}
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
      <img
        className="ripples-07"
        src={ripples07}
        width=""
        height=""
        alt="ripples 07"
      />
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
