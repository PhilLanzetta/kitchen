import React from "react"
import * as styles from "./fourColumnImg.module.css"
import Slider from "react-slick"
import useWindowSize from "../utils/useWindowSize"
import { GatsbyImage } from "gatsby-plugin-image"

const FourColumnImg = ({ images }) => {
  const { width } = useWindowSize()

  const mobileSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2.35,
  }

  return (
    <>
      {width > 920 ? (
        <section className={styles.imageContainer}>
          {images.map(image => (
            <figure className={styles.image} key={image.image.id}>
              <GatsbyImage
                image={image.image.gatsbyImageData}
                alt={image.image.description}
              ></GatsbyImage>
              <figcaption>{image.creditText}</figcaption>
            </figure>
          ))}
        </section>
      ) : (
        <Slider
          {...mobileSettings}
          className={`${styles.carousel} module-carousel`}
        >
          {images.map(image => (
            <figure key={image.image.id}>
              <GatsbyImage
                image={image.image.gatsbyImageData}
                alt={image.image.description}
              ></GatsbyImage>
              <figcaption>{image.creditText}</figcaption>
            </figure>
          ))}
        </Slider>
      )}
    </>
  )
}

export default FourColumnImg
