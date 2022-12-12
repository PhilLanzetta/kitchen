/*
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetData {
      allContentfulExhibition(sort: { startDate: ASC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const events = result.data.allContentfulExhibition.edges

  console.log(events)

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
}
