import React from "react"
import * as styles from "./calendarTile.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { HiArrowRight } from "react-icons/hi2"
import LinkButton from "./linkButton"

const CalendarTile = ({ data, onView }) => {
  const {
    links,
    featuredImage,
    videoTitle,
    artist,
    slug,
    exhibitionHours,
    exhibitionTitle,
  } = data

  return (
    <section className={styles.container}>
      <article className={styles.eventInfo}>
        <p className={`${onView ? styles.onView : styles.onScreen}`}>
          {onView ? "ON VIEW" : "ON SCREEN"}
        </p>
        <h3 className={styles.artist}>{artist}</h3>
        <h4 className={styles.title}>{exhibitionTitle || videoTitle}</h4>
        {exhibitionHours && <h4 className={styles.title}>{exhibitionHours}</h4>}
        <Link
          to={onView ? `/on-view/${slug}` : `/on-screen/${slug}`}
          className={styles.learnMore}
        >
          Learn More <HiArrowRight></HiArrowRight>
        </Link>
        {links.length && (
          <article className={styles.links}>
            {links.map(link =>
              link.id ? (
                <LinkButton key={link.id} data={link}></LinkButton>
              ) : null
            )}
          </article>
        )}
      </article>
      <figure className={styles.featuredImage}>
        <GatsbyImage
          image={featuredImage.image.gatsbyImageData}
          alt={featuredImage.image.description}
          style={{ width: "100%" }}
        ></GatsbyImage>
        <figcaption>{featuredImage.creditText}</figcaption>
      </figure>
    </section>
  )
}

export default CalendarTile
