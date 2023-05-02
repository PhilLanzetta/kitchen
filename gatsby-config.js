/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

let contentfulOptions = {}
if (process.env.CONTEXT === "production") {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
    host: process.env.CONTENTFUL_HOST,
    enableTags: true,
  }
} else {
  contentfulOptions = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    host: process.env.CONTENTFUL_PREVIEW_HOST,
    enableTags: true,
  }
}

module.exports = {
  siteMetadata: {
    title: `The Kitchen`,
    description: `The Kitchen is one of New York City’s oldest nonprofit spaces, showing innovative work by emerging and established artists across disciplines. Our programs range from dance, music, performance, and theater, to video, film, and art, in addition to literary events, artists’ talks, and lecture series. Since its inception, The Kitchen has been a powerful force in shaping the cultural landscape of this country, and has helped launch the careers of many artists who have gone on to worldwide prominence.`,
    author: `@thekitchen_nyc`,
    siteUrl: `https://thekitchen.org/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-5DK5NHH30V"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `the-kitchen`,
        short_name: `the-kitchen`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tkFav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulOptions,
    },
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.GATSBY_MYSHOPIFY_URL,
        downloadImages: true,
        shopifyConnections: ["collections"],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
  ],
}
