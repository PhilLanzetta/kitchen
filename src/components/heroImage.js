import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./heroImage.module.css"

const HeroImage = ({ image, margin }) => {
  return (
    <figure className={margin ? styles.marginTop : styles.mobileMarginTop}>
      <GatsbyImage
        image={image?.image?.gatsbyImageData}
        alt={image?.image?.description}
        className={styles.heroImage}
      ></GatsbyImage>
      <figcaption>{image?.creditText}</figcaption>
    </figure>
  )
}

export default HeroImage
