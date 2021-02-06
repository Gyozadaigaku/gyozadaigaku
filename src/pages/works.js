import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Works from "../components/Works"
import SEO from "../components/SEO"

const WorksPage = ({
  data: {
    allStrapiWorks: { nodes: works },
  },
}) => {
  return (
    <Layout>
      <SEO title="Works" />
      <section className="works-page">
        <Works works={works} title="all works" />
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiWorks {
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

export default WorksPage
