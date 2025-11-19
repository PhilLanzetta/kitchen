import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import OnFileHero from "../../components/onFileHero"
import OnFileSpotlight from "../../components/onFileSpotlight"
import OnFileYearLinks from "../../components/onFileYearLinks"

const OnFile = ({ location, data }) => {
  const spotlightPosts = data.allContentfulOnFileSpotlight.nodes
  return (
    <Layout location={location}>
      <OnFileHero></OnFileHero>
      {spotlightPosts.map(spotlight => (
        <OnFileSpotlight key={spotlight.id} data={spotlight}></OnFileSpotlight>
      ))}
      <OnFileYearLinks></OnFileYearLinks>
    </Layout>
  )
}

export const Head = () => <Seo title="ON FILE" />

export const query = graphql`
  query {
    allContentfulOnFileSpotlight(limit: 2, sort: { updatedAt: DESC }) {
      nodes {
        id
        title
        spotlightText {
          spotlightText
        }
        externalLink {
          linkId: id
          linkIcon
          linkText
          linkUrl
        }
        spotlightArchivePosts {
          artist
          endDate
          id
          metadata {
            tags {
              id
              name
              contentful_id
            }
          }
          slug
          startDate
          title
          featuredImage {
            creditText
            image {
              description
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default OnFile
