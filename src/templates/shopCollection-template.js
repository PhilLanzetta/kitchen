import React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "../components/collection.module.css"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

const ShopCollection = ({ data, location }) => {
  const { products } = data.shopifyCollection
  return (
    <Layout location={location}>
      <section className={styles.productContainer}>
        {products?.map(product => (
          <Link to={`/shop/${product.handle}`} className={styles.productCard}>
            <GatsbyImage
              image={
                product.featuredImage.localFile.childImageSharp.gatsbyImageData
              }
              alt={product.title}
              className={styles.image}
            ></GatsbyImage>
            <article className={styles.productInfoContainer}>
              <h2 className={styles.productInfo}>
                <span>{product.metafield.value}</span>
              </h2>
              <h3 className={styles.productInfo}>
                <span>{product.title}</span>
              </h3>
              <h3 className={styles.productInfo}>
                <span>${product.priceRangeV2.minVariantPrice.amount}</span>
              </h3>
            </article>
          </Link>
        ))}
      </section>
    </Layout>
  )
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
