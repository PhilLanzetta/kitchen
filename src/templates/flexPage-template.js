import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import FlexContent from "../components/flexContent"
import Seo from "../components/seo"

const FlexPage = ({ location, data }) => {
  const { title, headerTagline, content } = data.contentfulFlexPage
  return (
    <Layout location={location} title={title} tagline={headerTagline}>
      <FlexContent content={content}></FlexContent>
    </Layout>
  )
}

export const query = graphql`
  query getSingleFlexPage($slug: String) {
    contentfulFlexPage(slug: { eq: $slug }) {
      id
      title
      headerTagline
      content {
        ... on ContentfulFlexLinkBox {
          linkBoxId: id
          linkText
          linkUrl
          internalLink
          size
        }
        ... on ContentfulFourColumnImages {
          fourColumnId: id
          images {
            image {
              description
              gatsbyImageData
              id
            }
            creditText
          }
        }
        ... on ContentfulHeadlineWithText {
          headlineTextId: id
          border
          headline
          paragraphText {
            paragraphText
          }
          screenWidth
        }
        ... on ContentfulImageCarousel {
          carouselId: id
          images {
            creditText
            image {
              description
              id
              gatsbyImageData
            }
          }
        }
        ... on ContentfulColumnText {
          columnTextId: id
          numberOfColumns
          text {
            text
          }
        }
        ... on ContentfulImageWithText {
          imageTextId: id
          textOnLeftSide
          text {
            text
          }
          images {
            image {
              description
              gatsbyImageData
            }
            id
            creditText
          }
        }
        ... on ContentfulTwoColumnImage {
          twoColumnId: id
          images {
            creditText
            image {
              id
              gatsbyImageData
              description
            }
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.contentfulFlexPage.title} />

export default FlexPage
