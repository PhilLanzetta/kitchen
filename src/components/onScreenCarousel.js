import React from "react"
import * as styles from "./onScreenCarousel.module.css"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

const OnScreenCarousel = ({ heading, data }) => {
  const settings = {
    slidesToShow: 2.5,
    infinite: false,
  }

  return (
    <div>
      <h2 className={`${styles.heading} tgnHeavyItalic`}>{heading}</h2>
      <Slider {...settings}>
        {data.map(item => (
          <article key={item.id}>
            <GatsbyImage
              image={
                item.featuredImage?.gatsbyImageData ||
                item.seriesCoverPhoto?.gatsbyImageData
              }
              className={styles.image}
            ></GatsbyImage>
          </article>
        ))}
      </Slider>
    </div>
  )
}

export default OnScreenCarousel
