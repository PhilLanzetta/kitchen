import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductInfo from "../components/productInfo"

const ShopProduct = ({ data, location }) => {
  return (
    <Layout location={location}>
      <ProductInfo data={data.shopifyProduct}></ProductInfo>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($handle: String) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      collections {
        title
        handle
      }
      descriptionHtml
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      metafields {
        value
        key
      }
      title
      priceRangeV2 {
        minVariantPrice {
          amount
        }
      }
      media {
        ... on ShopifyMediaImage {
          id
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default ShopProduct
