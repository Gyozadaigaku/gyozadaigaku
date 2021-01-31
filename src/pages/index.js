import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return (
    <Layout>
      <Hero />
      <Skills />
      <Jobs />
    </Layout>
  )
}
// ...GatsbyImageSharpFluid
