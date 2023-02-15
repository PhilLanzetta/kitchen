import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const ShopCollection = ({ data, location }) => {
  return <Layout location={location}></Layout>
}

export const query = graphql`
  query getSingleCollection($handle: String) {
    shopifyCollection(handle: { eq: $handle }) {
      products {
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        handle
        metafield(key: "artist", namespace: "custom") {
          value
        }
        priceRangeV2 {
          minVariantPrice {
            amount
          }
        }
        title
      }
    }
  }
`

export default ShopCollection
