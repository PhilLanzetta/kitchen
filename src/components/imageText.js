import React from "react"
import * as styles from "./imageText.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const ImageText = ({ data }) => {
  console.log(data)
  return (
    <section
      className={`${styles.container} ${
        data.textOnLeftSide ? styles.reverse : ""
      }`}
    >
      <article className={styles.images}>
        {data.images.map(image => (
          <figure>
            <GatsbyImage
              image={image.image.gatsbyImageData}
              alt={image.image.description}
            ></GatsbyImage>
            <figcaption>{image.creditText}</figcaption>
          </figure>
        ))}
      </article>
      <article className={styles.text}>{data.text.text}</article>
    </section>
  )
}

export default ImageText
