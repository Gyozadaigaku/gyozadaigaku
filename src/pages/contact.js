import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>let's talk!</h3>
          <form action="https://formspree.io/f/xaylkprg" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                submit here
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
