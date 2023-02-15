import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnScreenVideoGrid from "../components/onScreenVideoGrid"

const OnScreenSeries = ({ data, location, pageContext }) => {
  const videos = data.contentfulOnScreenSeries.videosInSeries
  return (
    <Layout location={location}>
      <OnScreenVideoGrid data={videos}></OnScreenVideoGrid>
    </Layout>
  )
}

export const query = graphql`
  query getSeriesVideos($slug: String) {
    contentfulOnScreenSeries(slug: { eq: $slug }) {
      videosInSeries {
        id
        artist
        videoTitle
        seriesLabel
        slug
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
`

export const Head = () => <Seo title="ON SCREEN" />

export default OnScreenSeries
