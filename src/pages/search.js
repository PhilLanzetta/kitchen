import React from "react"
import Layout from "../components/layout"
import Search from "../components/search"

const SearchPage = ({ location }) => {
  return (
    <Layout location={location} title="Search">
      <Search
        indices={[{ name: `Page`, title: `Page` }]}
        initialSearch={location.state}
      ></Search>
    </Layout>
  )
}

export default SearchPage
