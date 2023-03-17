import React from "react"
import * as styles from "./productRow.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import useStore from "../context/StoreContext"

const ProductRow = ({ item }) => {
  const { product, quantity } = item
  const artist = product.metafields.filter(
    metafield => metafield.key === "artist"
  )

  const { removeLineItem, lowerCartItemQuantity, addCartItemQuantity } =
    useStore()

  return (
    <section className={styles.container}>
      <GatsbyImage
        image={product.featuredImage.localFile.childImageSharp.gatsbyImageData}
        className={styles.image}
      ></GatsbyImage>
      <article className={styles.info}>
        <p className={`upper ${styles.title}`}>
          <span>{artist[0].value}</span>
        </p>
        <p>
          <span>{product.title}</span>
        </p>
        <article className={styles.quantityContainer}>
          <p className={styles.quantityLabel}>Quantity {quantity}</p>
          <button
            className={styles.quantityBtn}
            onClick={() =>
              lowerCartItemQuantity(product.variants[0]?.shopifyId)
            }
            disabled={quantity === 1}
          >
            -
          </button>
          <button
            onClick={() => addCartItemQuantity(product.variants[0]?.shopifyId)}
            className={styles.quantityBtn}
          >
            +
          </button>
        </article>
        <button
          onClick={() => removeLineItem(product.variants[0]?.shopifyId)}
          className={styles.remove}
        >
          Remove from cart
        </button>
      </article>
      <p className={styles.price}>
        <span>{`$${
          product.priceRangeV2.minVariantPrice.amount * quantity
        }`}</span>
      </p>
    </section>
  )
}

export default ProductRow
