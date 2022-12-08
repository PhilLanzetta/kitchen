import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnMind = ({ location }) => {
  return (
    <Layout location={location}>
      <div>OnMind</div>
    </Layout>
  )
}

export const Head = () => <Seo title="ON MIND" />

export default OnMind
