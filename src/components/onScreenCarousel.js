import React from "react"
import * as styles from "./onScreenCarousel.module.css"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TagLink from "./tagLink"

const OnScreenCarousel = ({ heading, data }) => {
  const settings = {
    slidesToShow: 2.35,
    infinite: false,
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
      <Slider {...settings}>
        {data.map(item => (
          <article key={item.id} className={styles.videoContainer}>
            <GatsbyImage
              image={
                item.featuredImage?.gatsbyImageData ||
                item.seriesCoverPhoto?.gatsbyImageData
              }
              className={styles.image}
            ></GatsbyImage>
            <section className={styles.tileOverlay}>
              <Link to={`/on-screen/${item.slug}`} className={styles.eventLink}>
                <article className={styles.videoInfo}>
                  <p className={`tgnHeavy upper`}>
                    <span>{item.artist || item.seriesTitle}</span>
                  </p>
                  <p className={`tgn`}>
                    <span>{item.videoTitle ? `"${item.videoTitle}"` : ""}</span>
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
    </div>
  )
}

export default OnScreenCarousel
