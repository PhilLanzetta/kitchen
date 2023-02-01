import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnScreenVideoGrid from "../components/onScreenVideoGrid"
import Pagination from "../components/pagination"

const OnScreenAll = ({ data, location, pageContext }) => {
  const videos = data.allContentfulOnScreenVideo.edges
  return (
    <Layout location={location}>
     <OnScreenVideoGrid data={videos}></OnScreenVideoGrid>
      <Pagination data={pageContext} location="/on-screen/all"></Pagination>
    </Layout>
  )
}

export const query = graphql`
  query getAllVideos($skip: Int!, $limit: Int!) {
    allContentfulOnScreenVideo(
      sort: { endDate: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          artist
          videoTitle
          seriesLabel
          slug
          featuredImage {
            description
            gatsbyImageData(placeholder: BLURRED)
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

export const Head = () => <Seo title="ON SCREEN" />

export default OnScreenAll
