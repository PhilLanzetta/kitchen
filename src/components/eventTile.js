import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./eventTile.module.css"
import TagLink from "./tagLink"

const EventTile = ({ event }) => {
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
    <section className={styles.eventTileContainer}>
      <GatsbyImage
        image={event.featuredImage.gatsbyImageData}
        className={styles.featuredImage}
      ></GatsbyImage>
      <Link to="/" className={styles.eventLink}>
        <article className={styles.eventInfo}>
          <p className={`tgnHeavy upper`}>
            <span>{event.artist}</span>
          </p>
          <p className={`tgnHeavyItalic upper`}>
            <span>{event.exhibitionTitle}</span>
          </p>
          <p className={`tgn`}>
            <span>
              {startDate} - {endDate}
            </span>
          </p>
        </article>
      </Link>
      <section className={styles.tagContainer}>
        {event.metadata.tags.map(tag => (
          <TagLink tag={tag}></TagLink>
        ))}
      </section>
    </section>
  )
}

export default EventTile
