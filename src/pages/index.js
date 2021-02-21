import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Jobs from "../components/Jobs"
import Works from "../components/Works"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import ripples01 from "../assets/ripples-01.svg"
import ripples02 from "../assets/ripples-02.svg"
import ripples03 from "../assets/ripples-03.svg"
import ripples04 from "../assets/ripples-04.svg"
import ripples05 from "../assets/ripples-05.svg"
export default ({ data }) => {
  const {
    allStrapiWorks: { nodes: works },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Hero />
      <img
        className="ripples-01"
        src={ripples01}
        width=""
        height=""
        alt="ripples 01"
      />
      <Skills />
      <img
        className="ripples-02"
        src={ripples02}
        width=""
        height=""
        alt="ripples 02"
      />
      <Jobs />
      <img
        className="ripples-03"
        src={ripples03}
        width=""
        height=""
        alt="ripples 03"
      />
      <Works works={works} title="featured works" showLink />
      <img
        className="ripples-04"
        src={ripples04}
        width=""
        height=""
        alt="ripples 04"
      />
      <Blogs blogs={blogs} title="latest articles" showLink />
      <img
        className="ripples-05"
        src={ripples05}
        width=""
        height=""
        alt="ripples 05"
      />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiWorks(filter: { featured: { eq: true } }) {
      nodes {
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
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
// ...GatsbyImageSharpFluid
