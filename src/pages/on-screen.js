import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import OnScreenCarousel from "../components/onScreenCarousel"
import Seo from "../components/seo"

const OnScreen = ({ location, data }) => {
  const featuredStreaming = data.allContentfulOnScreenVideo.nodes
  const series = data.allContentfulOnScreenSeries.nodes
  return (
    <Layout location={location}>
      <OnScreenCarousel
        padding
        heading="Streaming Now"
        data={featuredStreaming}
      ></OnScreenCarousel>
      <OnScreenCarousel
        heading="Kitchen Series"
        data={series}
      ></OnScreenCarousel>
      <Link className="on-view-past-link" to="/on-screen/all/">
        <p className="tgnHeavyItalic upper on-view-past">See All</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 171.707 107.317"
          className="on-view-arrow"
        >
          <path
            id="Path_15"
            dataname="Path 15"
            d="M156.561,61.236l-53.852,44.608,4.607,5.473,64.39-53.809L107.317,4,102.7,9.466l53.866,44.615H0v7.154Z"
            transform="translate(0 -4)"
            fillRule="evenodd"
          />
        </svg>
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulOnScreenSeries {
      nodes {
        id
        seriesTitle
        seriesCoverPhoto {
          creditText
          image {
            description
            gatsbyImageData
          }
        }
        metadata {
          tags {
            id
            name
            contentful_id
          }
        }
        slug
      }
    }
    allContentfulOnScreenVideo(limit: 4, sort: { startDate: DESC }) {
      nodes {
        artist
        id
        videoTitle
        featuredImage {
          creditText
          image {
            description
            gatsbyImageData
          }
        }
        slug
        metadata {
          tags {
            id
            name
            contentful_id
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="ON SCREEN" />

export default OnScreen
