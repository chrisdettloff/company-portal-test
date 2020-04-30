import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Introduction</h2>
    <p>This DaySmart company portal is the central location for all information on how the company
    operates. Anyone who is apart of the company can create a <a href="https://github.com/DaySmart/company-portal/pulls">pull request </a> 
    to add content or make improvements to the content on this page.</p>
    <h2>Company</h2>
    <Link to="/about/">About</Link>
  </Layout>
)

export default IndexPage
