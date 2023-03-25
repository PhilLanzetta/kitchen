const pageQuery = `{
  pages: allSitePage {
    nodes {
      id
      component
      componentChunkName
      path
      pageContext
      internal {
        contentDigest
      }
    }
  }
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.nodes,
    indexName: `Page`,
  },
]

module.exports = queries
