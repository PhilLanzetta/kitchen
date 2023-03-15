import React from "react"
import * as styles from "./productInfo.module.css"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import useStore from "../context/StoreContext"

const ProductInfo = ({ data }) => {
  const {
    media,
    title,
    priceRangeV2,
    metafields,
    descriptionHtml,
    collections,
  } = data

  const { addVariantToCart } = useStore()

  const filteredCollections = collections.filter(
    collection => collection.title !== "New" && collection.title !== "Featured"
  )

  const artist = metafields.filter(metafield => metafield.key === "artist")

  const body = metafields.filter(metafield => metafield.key === "body_text")

  const heading = metafields.filter(
    metafield => metafield.key === "heading_text"
  )

  const nonProductImg = metafields.filter(
    metafield => metafield.key === "body_media_link"
  )

  const settings = {
    dots: true,
    appendDots: dots => (
      <div>
        <ul className={styles.dotsContainer}> {dots} </ul>
      </div>
    ),
    customPaging: i => <div className={styles.dots}></div>,
    arrows: false,
  }

  return (
    <section className={styles.productContainer}>
      <article className={styles.productInfo}>
        <section className={styles.productCarouselContainer}>
          <Slider {...settings} className={styles.productCarousel}>
            {media.map(image => (
              <div key={image.id}>
                <div className={styles.imageSlide}>
                  <GatsbyImage
                    image={
                      image.image.localFile.childImageSharp.gatsbyImageData
                    }
                    className={styles.productImage}
                    imgStyle={{ objectFit: "contain" }}
                  ></GatsbyImage>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <section className={styles.productInfoText}>
          <div className={styles.collectionContainer}>
            {filteredCollections.map(collection => (
              <Link to={`/shop/${collection.handle}`}>{collection.title}</Link>
            ))}
          </div>
          <div className={styles.artistAndTitle}>
            <p className={styles.artist}>{artist[0].value}</p>
            <p className={styles.title}>{title}</p>
          </div>
          <p className={styles.price}>${priceRangeV2.minVariantPrice.amount}</p>
          <div
            className={styles.productDescription}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          ></div>
          <button
            className={styles.addCart}
            onClick={() => addVariantToCart(data, 1)}
          >
            Add to Cart
          </button>
        </section>
      </article>
      <article className={styles.supplemental}>
        <div>
          <h2 className={styles.heading}>{heading[0].value}</h2>
          <p className={styles.body}>{body[0].value}</p>
        </div>
        {nonProductImg.length > 0 && (
          <img src={nonProductImg[0].value} className={styles.bodyImage} />
        )}
      </article>
    </section>
  )
}

export default ProductInfo
