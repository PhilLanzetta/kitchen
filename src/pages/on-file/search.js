import React from "react"
import Layout from "../../components/layout"
import OnFileSearch from "../../components/onFileSearch"
import Seo from "../../components/seo"

const Search = ({ location }) => {
  return (
    <Layout location={location}>
      <OnFileSearch location={location}></OnFileSearch>
    </Layout>
  )
}

export const Head = () => <Seo title="ON FILE" />

export default Search
