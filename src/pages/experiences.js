import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Experiences from "../components/Experiences"
import SEO from "../components/SEO"
import ripples06 from "../assets/ripples-06.svg"
const ExperiencesPage = ({
  data: {
    allStrapiExperience: { nodes: experiences },
  },
}) => {
  return (
    <Layout>
      <SEO title="Experiences" />
      <section className="experiences-page">
        <Experiences experiences={experiences} title="all experiences" />
      </section>
      <img
        className="ripples-06"
        src={ripples06}
        width=""
        height=""
        alt="ripples 06"
      />
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiExperience {
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

export default ExperiencesPage
