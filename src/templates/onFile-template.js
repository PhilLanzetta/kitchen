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
        style={{
          background: "#000000",
          color: "#ffffff",
          paddingTop: "100px",
          paddingBottom: "40px",
        }}
      >
        <ArchiveFixedContent
          data={data.contentfulOnFileArchivePost}
        ></ArchiveFixedContent>
        <ModuleContent data={moduleContent} dark={true}></ModuleContent>
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
          linkIcon
        }
        ... on ContentfulUrlLink {
          linkId: id
          linkText
          linkUrl
          linkIcon
        }
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
          id
          images {
            creditText
            image {
              description
              gatsbyImageData
            }
          }
        }
        ... on ContentfulInTextImage {
          inTextImgId: id
          image {
            creditText
            image {
              description
              gatsbyImageData
            }
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
            creditText
            image {
              description
              gatsbyImageData
            }
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
