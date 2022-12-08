import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnScreen = ({ location }) => {
  return (
    <Layout location={location}>
      <div>OnScreen</div>
    </Layout>
  )
}

export const Head = () => <Seo title="ON SCREEN" />

export default OnScreen
