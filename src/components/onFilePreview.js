import { GatsbyImage } from "gatsby-plugin-image"
import TagLink from "./tagLink"
import React from "react"
import * as styles from "./onFilePreview.module.css"
import { Link } from "gatsby"

const OnFilePreview = ({ data }) => {
  const { title, slug, artist, startDate, endDate, metadata, featuredImage } =
    data

  const startDateOptions = {
    month: "short",
    day: "numeric",
  }

  const endDateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  const start = new Intl.DateTimeFormat("en-US", startDateOptions).format(
    new Date(startDate)
  )

  const end = new Intl.DateTimeFormat("en-US", endDateOptions).format(
    new Date(endDate)
  )
  return (
    <article className={styles.container}>
      <GatsbyImage
        image={featuredImage.gatsbyImageData}
        alt={featuredImage.description}
      ></GatsbyImage>
      <Link to={`/on-file/${slug}`}>
        <p className={styles.dates}>
          {start} - {end}
        </p>
        <h3>{title}:</h3>
        <h4>{artist}</h4>
        {metadata?.tags && (
          <article className={`${styles.tagContainer} tgn`}>
            {metadata.tags.map(tag => (
              <TagLink key={tag.id} tag={tag} light={false}></TagLink>
            ))}
          </article>
        )}
      </Link>
    </article>
  )
}

export default OnFilePreview
