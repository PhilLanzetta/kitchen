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
        allContentfulOnFileArchivePost(sort: { endDate: ASC }) {
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
        prev: index === 0 ? null : events[index - 1].node,
        next: index === events.length - 1 ? null : events[index + 1].node,
      },
    })
  })

  const postsPerPage = 6
  const numPages = Math.ceil(pastEvents.length / postsPerPage)

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
}
