import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Slider from "react-slick"
import * as styles from "./shopFeatured.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const ShopFeatured = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(
        filter: { collections: { elemMatch: { title: { eq: "Featured" } } } }
        limit: 3
      ) {
        nodes {
          title
          handle
          id
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          metafield(key: "artist", namespace: "custom") {
            value
          }
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
      allShopifyCollection(filter: { title: { eq: "Featured" } }) {
        nodes {
          description
        }
      }
    }
  `)

  const products = data.allShopifyProduct.nodes
  const description = data.allShopifyCollection.nodes[0].description

  const settings = {
    slidesToShow: 3,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1.5,
          infinite: false,
        },
      },
    ],
  }

  return (
    <section className={styles.featuredContainer}>
      <article className={styles.description}>{description}</article>
      <h2 className={`tgnHeavyItalic upper ${styles.featured}`}>Featured</h2>
      <Slider {...settings}>
        {products.map(item => (
          <article key={item.id} className={styles.productContainer}>
            <GatsbyImage
              image={
                item.featuredImage.localFile.childImageSharp.gatsbyImageData
              }
              className={styles.image}
            ></GatsbyImage>
            <section className={styles.tileOverlay}>
              <Link to={`/shop/${item.handle}`} className={styles.eventLink}>
                <article className={styles.productInfo}>
                  <p className={`tgn upper`}>
                    <span>{item.metafield.value}</span>
                  </p>
                  <p className={`tgnHeavyItalic upper`}>
                    <span>{item.title}</span>
                  </p>
                  <p className={`tgnHeavyItalic`}>
                    <span>{`$${item.priceRangeV2.minVariantPrice.amount}`}</span>
                  </p>
                </article>
              </Link>
            </section>
          </article>
        ))}
      </Slider>
    </section>
  )
}

export default ShopFeatured
