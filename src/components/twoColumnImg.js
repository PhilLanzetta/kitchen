import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./twoColumnImg.module.css"

const TwoColumnImg = ({ data }) => {
  return (
    <section className={styles.imgContainer}>
      {data.map(image => (
        <figure key={image.id}>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.description}
          ></GatsbyImage>
          <figcaption>{image.description}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default TwoColumnImg
