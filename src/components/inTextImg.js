import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inTextImg.module.css'

const InTextImg = ({data}) => {
  return (
    <figure className={styles.imgContainer}>
     <GatsbyImage image={data.image.gatsbyImageData} alt={data.image.description}></GatsbyImage>
     <figcaption>{data.creditText}</figcaption>
     </figure>
  )
}

export default InTextImg