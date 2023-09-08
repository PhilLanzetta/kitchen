import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import TagGrid from "../components/tagGrid"
import Seo from "../components/seo"

const TagPage = ({ data, pageContext, location }) => {
  const onFile = data.allContentfulOnFileArchivePost.nodes
  const onScreen = data.allContentfulOnScreenVideo.nodes
  const onMind = data.allContentfulOnMindArticle.nodes
  const onView = data.allContentfulOnView.nodes

  const shuffleData = array => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }
    return array
  }

  let tagData = []

  if (onView?.length > 0 || onMind?.length > 0 || onFile?.length > 0) {
    tagData = shuffleData(
      data.allContentfulOnFileArchivePost.nodes.concat(
        data.allContentfulOnMindArticle.nodes.concat(
          data.allContentfulOnScreenVideo.nodes.concat(
            data.allContentfulOnView.nodes
          )
        )
      )
    )
  } else {
    tagData = onScreen
  }

  return (
    <Layout location={location}>
      <h1
        style={{
          marginTop: "100px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >{`#${pageContext.name}`}</h1>
      <TagGrid data={tagData}></TagGrid>
    </Layout>
  )
}

export const query = graphql`
  query getSingleTagPage($slug: String) {
    allContentfulOnFileArchivePost(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $slug } } } }
      }
    ) {
      nodes {
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
    }
    allContentfulOnMindArticle(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $slug } } } }
      }
    ) {
      nodes {
        id
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
        onMindSlug: slug
        title
      }
    }
    allContentfulOnScreenVideo(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $slug } } } }
      }
      sort: { startDate: DESC }
    ) {
      nodes {
        id
        artist
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
        onScreenSlug: slug
        videoTitle
      }
    }
    allContentfulOnView(
      filter: {
        metadata: { tags: { elemMatch: { contentful_id: { eq: $slug } } } }
      }
    ) {
      nodes {
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
`

export const Head = () => <Seo title="SEARCH" />

export default TagPage
