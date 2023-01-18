import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnMindHome from "../components/onMindHome"

const OnMind = ({ location }) => {
  return (
    <Layout location={location}>
      <OnMindHome location={location}></OnMindHome>
    </Layout>
  )
}

export const Head = () => <Seo title="ON MIND" />

export default OnMind
