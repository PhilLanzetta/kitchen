import React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import OnFileHero from '../components/onFileHero'

const OnFile = ({location}) => {
  return (
    <Layout location={location}>
      <OnFileHero></OnFileHero>
    </Layout>
  )
}

export const Head = () => <Seo title="ON FILE" />

export default OnFile