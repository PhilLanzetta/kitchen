/*
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      query GetData {
        allContentfulOnViewExhibition(sort: { startDate: ASC }) {
          edges {
            node {
              slug
            }
          }
        }
        passedOnView: allContentfulOnViewExhibition(
          filter: { hasEnded: { eq: true } }
        ) {
          edges {
            node {
              id
            }
          }
        }
        allOnScreen: allContentfulOnScreenVideo(sort: { endDate: DESC }) {
          edges {
            node {
              id
              slug
            }
          }
        }
        allShopifyProduct {
          edges {
            node {
              handle
            }
          }
        }
        allShopifyCollection {
          edges {
            node {
              handle
            }
          }
        }
        allContentfulOnFileArchivePost(sort: { endDate: ASC }) {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulOnScreenSeries {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulPressRelease {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulFlexPage {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulTag {
          edges {
            node {
              contentful_id
              name
            }
          }
        }
        allContentfulOnMindArticle(sort: { articleDate: DESC }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  const events = result.data.allContentfulOnViewExhibition.edges

  const pastEvents = result.data.passedOnView.edges

  const archivePosts = result.data.allContentfulOnFileArchivePost.edges

  const onMindArticles = result.data.allContentfulOnMindArticle.edges

  const onScreenVideos = result.data.allOnScreen.edges

  const onScreenSeries = result.data.allContentfulOnScreenSeries.edges

  const allProducts = result.data.allShopifyProduct.edges

  const flexPages = result.data.allContentfulFlexPage.edges

  const collections = result.data.allShopifyCollection.edges

  const pressReleases = result.data.allContentfulPressRelease.edges

  const tags = result.data.allContentfulTag.edges

  events.forEach(({ node }, index) => {
    const eventSlug = node.slug
    createPage({
      path: `/on-view/${eventSlug}`,
      component: path.resolve(`src/templates/onView-template.js`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : events[index - 1].node,
        next: index === events.length - 1 ? null : events[index + 1].node,
      },
    })
  })

  archivePosts.forEach(({ node }, index) => {
    const archiveSlug = node.slug
    createPage({
      path: `/on-file/${archiveSlug}`,
      component: path.resolve(`src/templates/onFile-template.js`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : archivePosts[index - 1].node,
        next:
          index === archivePosts.length - 1
            ? null
            : archivePosts[index + 1].node,
      },
    })
  })

  onMindArticles.forEach(({ node }, index) => {
    const articleSlug = node.slug
    createPage({
      path: `/on-mind/${articleSlug}`,
      component: path.resolve(`src/templates/onMind-template.js`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : onMindArticles[index - 1].node,
        next:
          index === onMindArticles.length - 1
            ? null
            : onMindArticles[index + 1].node,
      },
    })
  })

  onScreenVideos.forEach(({ node }, index) => {
    const videoSlug = node.slug
    createPage({
      path: `/on-screen/${videoSlug}`,
      component: path.resolve(`src/templates/onScreen-template.js`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : onScreenVideos[index - 1].node,
        next:
          index === onScreenVideos.length - 1
            ? null
            : onScreenVideos[index + 1].node,
      },
    })
  })

  flexPages.forEach(({ node }, index) => {
    const slug = node.slug
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/flexPage-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  tags.forEach(({ node }, index) => {
    const slug = node.contentful_id
    createPage({
      path: `/tags/${slug}`,
      component: path.resolve(`src/templates/tagPage-template.js`),
      context: {
        slug: node.contentful_id,
        name: node.name,
      },
    })
  })

  pressReleases.forEach(({ node }, index) => {
    const slug = node.slug
    createPage({
      path: `/press/${slug}`,
      component: path.resolve(`src/templates/pressRelease-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })

  onScreenSeries.forEach(({ node }, index) => {
    const seriesSlug = node.slug
    createPage({
      path: `/on-screen/${seriesSlug}`,
      component: path.resolve(`src/templates/onScreenSeries-template.js`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : onScreenSeries[index - 1].node,
        next:
          index === onScreenSeries.length - 1
            ? null
            : onScreenSeries[index + 1].node,
      },
    })
  })

  allProducts.forEach(({ node }, index) => {
    const productSlug = node.handle
    createPage({
      path: `/shop/${productSlug}`,
      component: path.resolve(`src/templates/shopProduct-template.js`),
      context: {
        handle: node.handle,
        prev: index === 0 ? null : allProducts[index - 1].node,
        next:
          index === allProducts.length - 1 ? null : allProducts[index + 1].node,
      },
    })
  })

  collections.forEach(({ node }, index) => {
    const collectionSlug = node.handle
    createPage({
      path: `/shop/${collectionSlug}`,
      component: path.resolve(`src/templates/shopCollection-template.js`),
      context: {
        handle: node.handle,
      },
    })
  })

  const postsPerPage = 6
  const videosPerPage = 8
  const numPages = Math.ceil(pastEvents.length / postsPerPage)
  const vidNumPages = Math.ceil(onScreenVideos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `on-view/past/` : `on-view/past/${i + 1}`,
      component: path.resolve(`src/templates/onViewPastList-template.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  Array.from({ length: vidNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `on-screen/all/` : `on-screen/all/${i + 1}`,
      component: path.resolve(`src/templates/onScreenAll-template.js`),
      context: {
        limit: videosPerPage,
        skip: i * videosPerPage,
        vidNumPages,
        currentPage: i + 1,
      },
    })
  })
}
