import React from "react"
import * as styles from "./archiveFixedContent.module.css"
import LinkButton from "./linkButton"
import TagLink from "./tagLink"

const ArchiveFixedContent = ({ data }) => {
  const {
    artist,
    title,
    startDate,
    endDate,
    metadata,
    category,
    introductionHeading,
    introductionBody,
    links,
  } = data

  console.log(links)

  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  const archiveStart = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(startDate)
  )

  const archiveEnd = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(endDate)
  )
  return (
    <section className={styles.fixedSection}>
      <article className={styles.heading}>
        <h1 className="tge upper">{title}</h1>
      </article>
      <article className={styles.exhibitInfo}>
        <section className={styles.exhibitDetails}>
          <article>
            <p className="tgn">
              <strong>Artist(s):</strong> {artist}
            </p>
          </article>
          <article>
            <p className="tgn">
              <strong>Date:</strong> {archiveStart} - {archiveEnd}
            </p>
          </article>
          {metadata?.tags && (
            <article className={styles.tagContainer}>
              {metadata.tags.map(tag => (
                <TagLink key={tag.id} tag={tag} light={true}></TagLink>
              ))}
            </article>
          )}
          {links?.map(item => {
            if (item.pdfId) {
              return <LinkButton data={item} onFile></LinkButton>
            } else if (item.linkId) {
              return <LinkButton data={item} onFile></LinkButton>
            } else {
              return <article>Unknown Link</article>
            }
          })}
        </section>
        <section className={styles.exhibitCopy}>
          <h3>{introductionHeading?.introductionHeading}</h3>
          <p>{introductionBody?.introductionBody}</p>
        </section>
      </article>
    </section>
  )
}

export default ArchiveFixedContent
