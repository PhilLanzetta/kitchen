import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import FixedContent from "../components/fixedContent"
import ModuleContent from "../components/moduleContent"

const OnViewExhibit = ({ data, pageContext, location }) => {
  const { heroImage, moduleContent } = data.contentfulExhibition
  return (
    <Layout location={location}>
      <HeroImage image={heroImage}></HeroImage>
      <FixedContent data={data.contentfulExhibition}></FixedContent>
      <ModuleContent data={moduleContent}></ModuleContent>
    </Layout>
  )
}

export const query = graphql`
  query getSingleExhibit($slug: String) {
    contentfulExhibition(slug: { eq: $slug }) {
      id
      artist
      exhibitionTitle
      startDate
      endDate
      exhibitionLocation
      openingHours
      exhibitionHours
      ticketLink
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
          id
          audioDescription
          title
          audioFile {
            file {
              url
            }
          }
        }
        ... on ContentfulBlockquote {
          id
          author
          quote {
            quote
          }
        }
        ... on ContentfulImageCarousel {
          id
          images {
            id
            gatsbyImageData
          }
        }
        ... on ContentfulTwoColumnImage {
          id
          images {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="ON VIEW" />

export default OnViewExhibit
