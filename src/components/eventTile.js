import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./eventTile.module.css"
import TagLink from "./tagLink"

const EventTile = ({ event, size }) => {
  const dateOptions = {
    month: "short",
    day: "numeric",
  }

  const startDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(event.startDate)
  )

  const endDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(event.endDate)
  )

  return (
    <section className={`${styles.eventTileContainer} ${styles[size]}`}>
      <GatsbyImage
        image={event.featuredImage.image.gatsbyImageData}
        className={styles.featuredImage}
        alt={event.featuredImage.image.description}
      ></GatsbyImage>
      <section className={styles.tileOverlay}>
        <Link to={`/on-view/${event.slug}`} className={styles.eventLink}>
          <article className={styles.eventInfo}>
            <p className={`tgnHeavy upper`}>
              <span>{event.artist}</span>
            </p>
            <p className={`tgnHeavyItalic upper`}>
              <span>{event.exhibitionTitle}</span>
            </p>
            <p className={`tgn`}>
              <span>
                {startDate} {startDate !== endDate ? `- ${endDate}` : ``}
              </span>
            </p>
          </article>
        </Link>
        {event.metadata.tags?.length !== 0 && (
          <section className={styles.tagContainer}>
            {event.metadata.tags.map(tag => (
              <TagLink tag={tag} key={tag.id}></TagLink>
            ))}
          </section>
        )}
      </section>
    </section>
  )
}

export default EventTile
