import React from "react"
import Layout from "../../components/layout"
import OnFileSearch from "../../components/onFileSearch"

const Search = ({location}) => {
  return <Layout location={location}><OnFileSearch></OnFileSearch></Layout>
}

export default Search
