import React, { useState, useRef } from "react"
import * as styles from "./timeline.module.css"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"

const Timeline = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  const sliderRef = useRef()

  const settings = {
    slidesToShow: 1.25,
    infinite: false,
    beforeChange: (current, next) => setSlideIndex(next),
    adaptiveHeight: true,
  }

  return (
    <section className={styles.container}>
      <h2>Timeline</h2>
      <input
        type="range"
        min={0}
        max={data.length - 1}
        value={slideIndex}
        onChange={e => sliderRef.current.slickGoTo(e.target.value)}
        className={styles.slider}
      />
      <Slider {...settings} ref={sliderRef}>
        {data.map(item => (
          <div key={item.id}>
            <article className={styles.slide}>
              <figure className={styles.image}>
                <GatsbyImage
                  image={item.image.image.gatsbyImageData}
                  alt={item.image.image.description}
                ></GatsbyImage>
                <figcaption>{item.image.creditText}</figcaption>
              </figure>
              <section className={styles.text}>
                <h3>{item.year}</h3>
                <p>{item.text.text}</p>
              </section>
            </article>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Timeline
