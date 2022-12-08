import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnAir from "../components/onAir"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <OnAir />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="ON AIR" />

export default IndexPage
