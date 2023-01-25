import { GatsbyImage } from "gatsby-plugin-image"
import React, { useState, useRef } from "react"
import Slider from "react-slick"
import * as styles from "./moduleCarousel.module.css"
import useWindowSize from "../utils/useWindowSize"

const ModuleCarousel = ({ data }) => {
  const [mousePos, setMousePos] = useState(null)
  const [position, setPosition] = useState({})
  const [hover, setHover] = useState(false)
  const { width } = useWindowSize()

  const sliderRef = useRef()

  const handleMouseMove = event => {
    setMousePos(event.clientX)
    setPosition({ top: event.clientY, left: event.clientX - 32 })
  }

  const handleClick = () => {
    if (width > 920 && mousePos > width / 2 + 32) {
      sliderRef.current.slickNext()
    } else if (width > 920 && mousePos < width / 2 + 32) {
      sliderRef.current.slickPrev()
    } else {
      return
    }
  }

  const settings = {
    dots: true,
    appendDots: dots => (
      <div>
        <ul className={styles.dotsContainer}> {dots} </ul>
      </div>
    ),
    customPaging: i => <div className={styles.dots}></div>,
    arrows: false,
  }

  const mobileSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 1.35,
  }

  return (
    <section className="module-carousel">
      {width > 920 && (
        <section
          className={styles.carouselContainer}
          onMouseMove={handleMouseMove}
          onMouseOver={() => setHover(true)}
          onFocus={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          onBlur={() => setHover(false)}
          onClick={handleClick}
          onKeyDown={handleClick}
          role="presentation"
        >
          <Slider ref={sliderRef} {...settings}>
            {data.map(image => (
              <figure key={image.id}>
                <GatsbyImage
                  image={image.gatsbyImageData}
                  alt={image.description}
                ></GatsbyImage>
                <figcaption>{image.description}</figcaption>
              </figure>
            ))}
          </Slider>
          {hover && width > 920 && mousePos < width / 2 + 32 && (
            <div className={styles.cursor} style={position}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 191.309 119.567"
              >
                <path
                  id="Path_22"
                  dataname="Path 22"
                  d="M16.875,67.769l60,49.7-5.133,6.1L0,63.616,71.741,4l5.141,6.09L16.867,59.8H191.309v7.971Z"
                  transform="translate(0 -4)"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          )}
          {hover && width > 920 && mousePos > width / 2 + 32 && (
            <div className={styles.cursor} style={position}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 191.309 119.568"
              >
                <path
                  id="Path_14"
                  data-name="Path 14"
                  d="M174.434,67.77l-60,49.7,5.133,6.1,71.741-59.951L119.568,4l-5.141,6.09L174.441,59.8H0V67.77Z"
                  transform="translate(0 -4)"
                  fill="#fff"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
          )}
        </section>
      )}
      {width <= 920 && (
        <Slider {...mobileSettings}>
          {data.map(image => (
            <figure key={image.id}>
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={image.description}
              ></GatsbyImage>
              <figcaption>{image.description}</figcaption>
            </figure>
          ))}
        </Slider>
      )}
    </section>
  )
}

export default ModuleCarousel
