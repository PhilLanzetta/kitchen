import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnViewHero from "../components/onViewHero"
import Pagination from "../components/pagination"

const OnViewPastList = ({ data, location, pageContext }) => {
  const exhibits = data.allContentfulOnView.edges
  return (
    <Layout location={location}>
      <OnViewHero exhibits={exhibits} width="oneThird"></OnViewHero>
      <Pagination data={pageContext} location="/on-view/past"></Pagination>
    </Layout>
  )
}

export const query = graphql`
  query getPastExhibits($skip: Int!, $limit: Int!) {
    allContentfulOnView(
      sort: { endDate: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          artist
          exhibitionTitle
          slug
          startDate
          endDate
          featuredImage {
            creditText
            image {
              description
              gatsbyImageData
            }
          }
          metadata {
            tags {
              name
              contentful_id
              id
            }
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="ON VIEW" />

export default OnViewPastList
