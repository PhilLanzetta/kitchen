import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnView = ({ location }) => {
  return (
    <Layout location={location}>
      <div>OnView</div>
    </Layout>
  )
}

export const Head = () => <Seo title="ON VIEW" />

export default OnView
