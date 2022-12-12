import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Slider from "react-slick"
import * as styles from "./moduleCarousel.module.css"

const ModuleCarousel = ({ data }) => {
  const settings = {
    dots: true,
    appendDots: dots => (
      <div>
        <ul className={styles.dotsContainer}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={styles.dots}
      >
      </div>
    ),
  }
  return (
    <section className={styles.carouselContainer}>
      <Slider {...settings}>
        {data.map(image => (
          <GatsbyImage
            image={image.gatsbyImageData}
            key={image.id}
          ></GatsbyImage>
        ))}
      </Slider>
    </section>
  )
}

export default ModuleCarousel
