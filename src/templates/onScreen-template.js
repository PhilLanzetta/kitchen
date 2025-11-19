import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import FixedContent from "../components/fixedContent"
import ModuleContent from "../components/moduleContent"
import TagGrid from "../components/tagGrid"

const OnScreenVideo = ({ data, location }) => {
  const { featuredImage, moduleContent, relatedContent } =
    data.contentfulOnScreenVideo

  return (
    <Layout location={location}>
      <HeroImage image={featuredImage}></HeroImage>
      <FixedContent data={data.contentfulOnScreenVideo}></FixedContent>
      <ModuleContent data={moduleContent} onScreen></ModuleContent>
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
          <TagGrid data={relatedContent} related></TagGrid>
        </section>
      )}
    </Layout>
  )
}

export const query = graphql`
  query getSingleVideo($slug: String) {
    contentfulOnScreenVideo(slug: { eq: $slug }) {
      id
      artist
      videoTitle
      screeningTime
      onViewLocation
      featuredImage {
        creditText
        image {
          description
          gatsbyImageData
          file {
            url
          }
        }
      }
      startDate
      endDate
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
      introductionText {
        introductionText
      }
      heroImage {
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
      moduleContent {
        ... on ContentfulAudio {
          audioId: id
          audioDescription
          audioFile {
            file {
              url
            }
          }
          audioEmbed {
            audioEmbed
          }
          audioUrl
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
          youtubeVideoId
          videoCredit
        }
        ... on ContentfulImageCarousel {
          carouselId: id
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
          youtubeVideoId
          videoId
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
    title={`ON SCREEN: ${data.contentfulOnScreenVideo.artist}`}
    description={data.contentfulOnScreenVideo.videoTitle}
    image={data.contentfulOnScreenVideo.featuredImage?.image?.file.url}
  />
)

export default OnScreenVideo
