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

Array.from({ length: numPages }).forEach((_, i) => {
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
