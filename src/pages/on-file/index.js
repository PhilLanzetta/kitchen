import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import OnFileHero from "../../components/onFileHero"
import OnFileSpotlight from "../../components/onFileSpotlight"
import OnFileYearLinks from "../../components/onFileYearLinks"
import { GatsbyImage } from "gatsby-plugin-image"

const OnFile = ({ location, data }) => {
  const spotlightPosts = data.contentfulOnFilePageHero.spotlights
  const { bloombergLogo, bloombergCreditText } = data.contentfulOnFilePageHero
  return (
    <Layout location={location}>
      <OnFileHero></OnFileHero>
      {spotlightPosts.map(spotlight => (
        <OnFileSpotlight key={spotlight.id} data={spotlight}></OnFileSpotlight>
      ))}
      <OnFileYearLinks></OnFileYearLinks>
      {bloombergLogo && (
        <div style={{ background: "#000", color: "#fff", padding: "20px" }}>
          <div
            style={{
              border: "1px solid #fff",
              display: "flex",
              padding: "20px",
              gap: "20px",
            }}
          >
            <div style={{ width: "25%", minWidth: "150px" }}>
              <GatsbyImage
                image={bloombergLogo.gatsbyImageData}
                alt={bloombergLogo.description}
                style={{ width: "100%" }}
              ></GatsbyImage>
            </div>
            <div>{bloombergCreditText.bloombergCreditText}</div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export const Head = () => <Seo title="ON FILE" />

export const query = graphql`
  query {
    contentfulOnFilePageHero {
      spotlights {
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
      bloombergCreditText {
        bloombergCreditText
      }
      bloombergLogo {
        gatsbyImageData(layout: FULL_WIDTH)
        description
      }
    }
  }
`

export default OnFile
