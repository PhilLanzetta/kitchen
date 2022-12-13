import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inTextImg.module.css'

const InTextImg = ({data}) => {
  return (
    <figure className={styles.imgContainer}>
     <GatsbyImage image={data.gatsbyImageData} alt={data.description}></GatsbyImage>
     <figcaption>{data.description}</figcaption>
     </figure>
  )
}

export default InTextImg