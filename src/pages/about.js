import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About Us</h1>
    <p>The is an example of where content will go.</p>
    <p>Content will be written in markdown and will be updated via pull requests.</p>
    <Link to="/">Homepage</Link>
  </Layout>
)

export default SecondPage
