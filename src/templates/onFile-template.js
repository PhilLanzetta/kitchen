import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ArchiveFixedContent from "../components/archiveFixedContent"
import ModuleContent from "../components/moduleContent"

const OnFilePost = ({ data, pageContext, location }) => {
  const { moduleContent } = data.contentfulOnFileArchivePost
  return (
    <Layout location={location}>
      <section
        style={{ background: "#000000", color: "#ffffff", paddingTop: "100px" }}
      >
        <ArchiveFixedContent
          data={data.contentfulOnFileArchivePost}
        ></ArchiveFixedContent>
        <ModuleContent data={moduleContent}></ModuleContent>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleArchivePost($slug: String) {
    contentfulOnFileArchivePost(slug: { eq: $slug }) {
      id
      artist
      title
      startDate
      endDate
      category
      introductionHeading {
        introductionHeading
      }
      introductionBody {
        introductionBody
      }
      links {
        ... on ContentfulPdfLink {
          pdfId: id
          linkText
          pdf {
            url
          }
          linkIcon {
            description
            gatsbyImageData
          }
        }
        ... on ContentfulUrlLink {
          linkId: id
          linkText
          linkUrl
          linkIcon {
            description
            gatsbyImageData
          }
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

export const Head = () => <Seo title="ON FILE" />

export default OnFilePost
