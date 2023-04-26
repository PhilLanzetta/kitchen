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
        allContentfulOnView(sort: { startDate: ASC }) {
          edges {
            node {
              slug
              artist
              title: exhibitionTitle
              metadata {
                tags {
                  name
                }
              }
            }
          }
        }
        allOnScreen: allContentfulOnScreenVideo(sort: { endDate: DESC }) {
          edges {
            node {
              id
              slug
              artist
              title: videoTitle
              introductionText {
                introductionText
              }
              metadata {
                tags {
                  id
                  name
                }
              }
            }
          }
        }
        allShopifyProduct {
          edges {
            node {
              handle
              metafields {
                value
                key
              }
              title
            }
          }
        }
        allShopifyCollection {
          edges {
            node {
              handle
              title
            }
          }
        }
        allContentfulOnFileArchivePost(sort: { endDate: ASC }) {
          edges {
            node {
              slug
              artist
              title
              category
              introductionText {
                introductionText
              }
              metadata {
                tags {
                  id
                  name
                }
              }
            }
          }
        }
        allContentfulOnScreenSeries {
          edges {
            node {
              slug
              title: seriesTitle
              metadata {
                tags {
                  name
                }
              }
            }
          }
        }
        allContentfulPressRelease {
          edges {
            node {
              slug
              title
              subtitle
            }
          }
        }
        allContentfulFlexPage {
          edges {
            node {
              slug
              title
              headerTagline
            }
          }
        }
        allContentfulTag {
          edges {
            node {
              contentful_id
              title: name
            }
          }
        }
        allContentfulOnMindArticle(sort: { articleDate: DESC }) {
          edges {
            node {
              slug
              category
              credits {
                credits
              }
              title
              metadata {
                tags {
                  name
                }
              }
              introductionText {
                introductionText
              }
            }
          }
        }
      }
    `
  )

  const events = result.data.allContentfulOnView.edges

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
        node: node,
        category: "On View",
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
        node: node,
        category: "On File",
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
        node: node,
        category: "On Mind",
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
        node: node,
        category: "On Screen",
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
        node: node,
        category: "Information",
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
        name: node.title,
        node: node,
        category: "Category",
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
        node: node,
        category: "Press",
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
        node: node,
        category: "On Screen",
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
        node: node,
        category: "Shop",
      },
    })
  })

  collections.forEach(({ node }, index) => {
    const collectionSlug = node.handle
    createPage({
      path: `/shop/${collectionSlug}`,
      component: path.resolve(`src/templates/shopCollection-template.js`),
      context: {
        node: node,
        category: "Shop",
        handle: node.handle,
      },
    })
  })

  const postsPerPage = 6
  const videosPerPage = 8
  const numPages = Math.ceil(events.length / postsPerPage)
  const vidNumPages = Math.ceil(onScreenVideos.length / videosPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `on-view/all/` : `on-view/all/${i + 1}`,
      component: path.resolve(`src/templates/onViewPastList-template.js`),
      context: {
        node: { title: "On View" },
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        category: "On View",
      },
    })
  })

  Array.from({ length: vidNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `on-screen/all/` : `on-screen/all/${i + 1}`,
      component: path.resolve(`src/templates/onScreenAll-template.js`),
      context: {
        node: {
          title: "On Screen",
        },
        limit: videosPerPage,
        skip: i * videosPerPage,
        vidNumPages,
        currentPage: i + 1,
        category: "On Screen",
      },
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const newPage = Object.assign({}, page)

  if (page.path === "/visit/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "Visit",
        keywords: [
          "subway",
          "car",
          "train",
          "bike",
          "accessibility",
          "contact",
          "hours",
          "address",
          "map",
        ],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/about/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "About",
        keywords: [
          "history",
          "mission",
          "timeline",
          "land acknowledgment",
          "values",
          "staff",
          "board",
          "leadership",
        ],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/on-file/") {
    deletePage(page)
    newPage.context = {
      category: "On File",
      node: {
        title: "On File",
        keywords: ["archive", "performance", "history", "artists", "past"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/on-file/search/") {
    deletePage(page)
    newPage.context = {
      category: "On File",
      node: {
        title: "On File Search",
        keywords: ["archive", "performance", "history", "artists", "past"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/calendar/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "Calendar",
        keywords: [
          "events",
          "performance",
          "tickets",
          "artists",
          "past",
          "upcoming",
        ],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/on-mind/") {
    deletePage(page)
    newPage.context = {
      category: "On Mind",
      node: {
        title: "On Mind",
        keywords: [
          "articles",
          "on mind",
          "news",
          "essays",
          "conversations",
          "diaries",
          "the kitchen archives",
        ],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/on-screen/") {
    deletePage(page)
    newPage.context = {
      category: "On Screen",
      node: {
        title: "On Screen",
        keywords: ["on screen", "videos", "series", "watch"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/on-view/") {
    deletePage(page)
    newPage.context = {
      category: "On View",
      node: {
        title: "On View",
        keywords: ["on view", "performance", "past events", "exhibit"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/press/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "Press Home",
        keywords: ["press", "press releases", "hi-res images"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/search/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "Search Page",
        keywords: ["search"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/shop/") {
    deletePage(page)
    newPage.context = {
      category: "Shop",
      node: {
        title: "Shop",
        keywords: ["on view", "performance", "past events", "exhibit"],
      },
    }

    createPage(newPage)
  }

  if (page.path === "/support/") {
    deletePage(page)
    newPage.context = {
      category: "Information",
      node: {
        title: "Support",
        keywords: [
          "donate",
          "membership",
          "support",
          "capital campaign",
          "corporate partnerships",
          "special events",
          "patron programs",
        ],
      },
    }

    createPage(newPage)
  }
}
