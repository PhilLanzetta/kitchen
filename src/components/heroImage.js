import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./heroImage.module.css"

const HeroImage = ({ image, margin }) => {
  return (
    <figure style={margin ? { marginTop: "100px" } : {}}>
      <GatsbyImage
        image={image.gatsbyImageData}
        alt={image.description}
        className={styles.heroImage}
      ></GatsbyImage>
      <figcaption>{image.description}</figcaption>
    </figure>
  )
}

export default HeroImage
