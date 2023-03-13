import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import HeroImage from "../components/heroImage"
import OnMindFixedContent from "../components/onMindFixedContent"
import ModuleContent from "../components/moduleContent"
import OnMindArticleHeader from "../components/onMindArticleHeader"
import TagGrid from "../components/tagGrid"

const OnMindArticle = ({ data, pageContext, location }) => {
  const { featuredImage, moduleContent, category, relatedContent } = data.contentfulOnMindArticle
  return (
    <Layout location={location}>
      <OnMindArticleHeader category={category}></OnMindArticleHeader>
      <HeroImage image={featuredImage} margin></HeroImage>
      <OnMindFixedContent
        data={data.contentfulOnMindArticle}
      ></OnMindFixedContent>
      <ModuleContent data={moduleContent} font="ftp"></ModuleContent>
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
  query getSingleArticle($slug: String) {
    contentfulOnMindArticle(slug: { eq: $slug }) {
      articleDate
      category
      credits
      featuredImage {
        creditText
        image {
          description
          gatsbyImageData
        }
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
      introductionText {
        introductionText
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
        ... on ContentfulOnViewExhibition {
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

export const Head = () => <Seo title="ON MIND" />

export default OnMindArticle
