import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"

const OnFile = ({location}) => {
  return (
    <Layout location={location}>
      <div>OnFile</div>
    </Layout>
  )
}

export const Head = () => <Seo title="ON FILE" />

export default OnFile