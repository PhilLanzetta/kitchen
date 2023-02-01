import React, { useState, useRef } from "react"
import * as styles from "./onScreenCarousel.module.css"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TagLink from "./tagLink"
import useWindowSize from "../utils/useWindowSize"

const OnScreenCarousel = ({ heading, data }) => {
  const [mousePos, setMousePos] = useState(null)
  const [position, setPosition] = useState({})
  const [hover, setHover] = useState(true)
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
    slidesToShow: 2.35,
    infinite: false,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.35,
        },
      },
    ],
  }

  return (
    <div>
      <h2 className={`${styles.heading} tgnHeavyItalic`}>{heading}</h2>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="presentation"
        className={styles.carouselContainer}
      >
        <Slider ref={sliderRef} {...settings}>
          {data.map(item => (
            <article
              key={item.id}
              className={styles.videoContainer}
              role="presentation"
              onMouseEnter={() => setHover(true)}
            >
                <GatsbyImage
                  image={
                    item.featuredImage?.gatsbyImageData ||
                    item.seriesCoverPhoto?.gatsbyImageData
                  }
                  className={styles.image}
                ></GatsbyImage>
              <section className={styles.tileOverlay}>
                <Link
                  to={`/on-screen/${item.slug}`}
                  className={styles.eventLink}
                >
                  <article
                    className={styles.videoInfo}
                    onMouseLeave={() => setHover(true)}
                    role="presentation"
                  >
                    <p className={`tgnHeavy upper`}>
                      <span>{item.artist || item.seriesTitle}</span>
                    </p>
                    <p className={`tgn`}>
                      {item.videoTitle ? <span>{item.videoTitle}</span> : null}
                    </p>
                  </article>
                </Link>
                <section className={styles.tagContainer}>
                  {item.metadata.tags?.map(tag => (
                    <TagLink tag={tag} key={tag.id}></TagLink>
                  ))}
                </section>
              </section>
            </article>
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
      </div>
    </div>
  )
}

export default OnScreenCarousel
