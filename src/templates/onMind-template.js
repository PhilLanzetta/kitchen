import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import OnMindFixedContent from "../components/onMindFixedContent"
import ModuleContent from "../components/moduleContent"

const OnMindArticle = ({ data, pageContext, location }) => {
  const { featuredImage, moduleContent } = data.contentfulOnMindArticle
  return (
    <Layout location={location}>
      <HeroImage image={featuredImage}></HeroImage>
      <OnMindFixedContent
        data={data.contentfulOnMindArticle}
      ></OnMindFixedContent>
      <ModuleContent data={moduleContent}></ModuleContent>
    </Layout>
  )
}

export const query = graphql`
  query getSingleArticle($slug: String) {
    contentfulOnMindArticle(slug: { eq: $slug }) {
      articleDate
      category
      credits
      featuredImage {
        gatsbyImageData
        description
      }
      id
      title
      metadata {
        tags {
          id
          name
          contentful_id
        }
      }
      introductionHeading {
        introductionHeading
      }
      introductionBody {
        introductionBody
      }
      moduleContent {
        ... on ContentfulAudio {
          audioId: id
          audioDescription
          audioFile {
            file {
              url
            }
          }
          title
        }
        ... on ContentfulBlockquote {
          quoteId: id
          author
          quote {
            quote
          }
        }
        ... on ContentfulCreditText {
          creditId: id
          text {
            text
          }
        }
        ... on ContentfulFullWidthVideo {
          fullVideoId: id
          videoId
          videoCredit
        }
        ... on ContentfulImageCarousel {
          carouselId: id
          images {
            gatsbyImageData
            id
            description
          }
        }
        ... on ContentfulInTextImage {
          inTextImgId: id
          image {
            gatsbyImageData
            description
            id
          }
        }
        ... on ContentfulInTextVideo {
          inTextVidId: id
          videoCredit
          videoId
        }
        ... on ContentfulThreeColumnText {
          threeColId: id
          text {
            text
          }
        }
        ... on ContentfulTwoColumnImage {
          twoColumnId: id
          images {
            description
            gatsbyImageData
            id
          }
        }
        ... on ContentfulTwoColumnText {
          twoColTxtId: id
          text {
            text
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="ON MIND" />

export default OnMindArticle
