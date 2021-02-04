import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Jobs from "../components/Jobs"
import Works from "../components/Works"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiWorks: { nodes: works },
  } = data

  return (
    <Layout>
      <Hero />
      <Skills />
      <Jobs />
      <Works works={works} title="featured works" showLink />
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
  }
`
// ...GatsbyImageSharpFluid
