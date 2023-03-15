import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductRow = ({ item }) => {
  const { product, quantity } = item
  const artist = product.metafields.filter(
    metafield => metafield.key === "artist"
  )
  return (
    <section>
      <GatsbyImage
        image={product.featuredImage.localFile.childImageSharp.gatsbyImageData}
      ></GatsbyImage>
      <article>
        <p className={`tgn upper`}>
          <span>{artist[0].value}</span>
        </p>
        <p className={`tgnHeavyItalic upper`}>
          <span>{product.title}</span>
        </p>
      </article>
      <p className={`tgnHeavyItalic`}>
        <span>{`$${product.priceRangeV2.minVariantPrice.amount}`}</span>
      </p>
    </section>
  )
}

export default ProductRow
