import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import ArchiveFixedContent from "../components/archiveFixedContent"
import ModuleContent from "../components/moduleContent"
import TagGrid from "../components/tagGrid"

const OnFilePost = ({ data, location }) => {
  const { moduleContent, relatedContent } = data.contentfulOnFileArchivePost
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
        {relatedContent && (
          <section style={{ margin: "20px 0px" }}>
            <h2
              style={{
                paddingLeft: "20px",
                letterSpacing: "3px",
              }}
            >
              RELATED
            </h2>
            <TagGrid data={relatedContent} related dark></TagGrid>
          </section>
        )}
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
      featuredImage {
        image {
          file {
            url
          }
        }
      }
      introductionText {
        introductionText
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
          audioUrl
          audioFile {
            file {
              url
            }
          }
          audioEmbed {
            audioEmbed
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
          youtubeVideoId
          videoId
          videoCredit
        }
        ... on ContentfulImageCarousel {
          carouselId: id
          images {
            creditText
            image {
              id
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
          youtubeVideoId
          videoId
        }
        ... on ContentfulTwoColumnImage {
          twoColumnId: id
          images {
            creditText
            image {
              id
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
        ... on ContentfulSingleColumnText {
          singleId: id
          text {
            text
          }
        }
      }
      relatedContent {
        ... on ContentfulOnFileArchivePost {
          id
          artist
          featuredImage {
            image {
              gatsbyImageData
              description
            }
          }
          metadata {
            tags {
              contentful_id
              id
              name
            }
          }
          onFileSlug: slug
          title
        }
        ... on ContentfulOnMindArticle {
          id
          featuredImage {
            image {
              description
              gatsbyImageData
            }
          }
          metadata {
            tags {
              contentful_id
              id
              name
            }
          }
          onMindSlug: slug
          title
        }
        ... on ContentfulOnScreenVideo {
          id
          artist
          featuredImage {
            image {
              gatsbyImageData
              description
            }
          }
          metadata {
            tags {
              contentful_id
              id
              name
            }
          }
          onScreenSlug: slug
          videoTitle
        }
        ... on ContentfulOnView {
          id
          artist
          exhibitionTitle
          featuredImage {
            image {
              description
              gatsbyImageData
            }
          }
          metadata {
            tags {
              contentful_id
              id
              name
            }
          }
          onViewSlug: slug
        }
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo
    title={`ON FILE: ${data.contentfulOnFileArchivePost.artist}`}
    description={data.contentfulOnFileArchivePost.title}
    image={data.contentfulOnFileArchivePost.featuredImage?.image?.file.url}
  />
)

export default OnFilePost
