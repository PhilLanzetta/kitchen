import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import FixedContent from "../components/fixedContent"
import ModuleContent from "../components/moduleContent"

const OnViewExhibit = ({ data, pageContext, location }) => {
  const { heroImage, moduleContent } = data.contentfulOnViewExhibition
  return (
    <Layout location={location}>
      <HeroImage image={heroImage}></HeroImage>
      <FixedContent data={data.contentfulOnViewExhibition}></FixedContent>
      <ModuleContent data={moduleContent}></ModuleContent>
    </Layout>
  )
}

export const query = graphql`
  query getSingleExhibit($slug: String) {
    contentfulOnViewExhibition(slug: { eq: $slug }) {
      id
      artist
      exhibitionTitle
      startDate
      endDate
      exhibitionLocation
      openingHours
      exhibitionHours
      links {
        ... on ContentfulPdfLink {
          pdfId: id
          linkText
          pdf {
            url
          }
          linkIcon {
            description
            url
          }
        }
        ... on ContentfulUrlLink {
          linkId: id
          linkText
          linkUrl
          linkIcon {
            description
            url
          }
        }
      }
      introductionHeading {
        introductionHeading
      }
      introductionBody {
        introductionBody
      }
      heroImage {
        description
        gatsbyImageData(placeholder: BLURRED)
      }
      metadata {
        tags {
          id
          name
          contentful_id
        }
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

export const Head = () => <Seo title="ON VIEW" />

export default OnViewExhibit
