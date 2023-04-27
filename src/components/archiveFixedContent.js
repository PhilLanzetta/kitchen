import React from "react"
import * as styles from "./archiveFixedContent.module.css"
import LinkButton from "./linkButton"
import TagLink from "./tagLink"
import { marked } from "marked"

const ArchiveFixedContent = ({ data }) => {
  const {
    artist,
    title,
    startDate,
    endDate,
    metadata,
    introductionText,
    links,
  } = data

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
              <strong className={styles.artist}>Artist(s):</strong> {artist}
            </p>
          </article>
          <article>
            <p className="tgn">
              <strong className={styles.artist}>Date:</strong>{" "}
              {archiveStart === archiveEnd
                ? archiveStart
                : `${archiveStart}-${archiveEnd}`}
            </p>
          </article>
          {metadata?.tags && (
            <aside className={styles.tagContainer}>
              {metadata.tags.map(tag => (
                <TagLink key={tag.id} tag={tag}></TagLink>
              ))}
            </aside>
          )}
          {links?.map ? (
            <aside className={styles.linksContainer}>
              {links?.map(item => {
                if (item.pdfId) {
                  return (
                    <LinkButton
                      key={item.pdfId}
                      data={item}
                      onFile
                    ></LinkButton>
                  )
                } else if (item.linkId) {
                  return (
                    <LinkButton
                      key={item.linkId}
                      data={item}
                      onFile
                    ></LinkButton>
                  )
                } else {
                  return <article>Unknown Link</article>
                }
              })}
            </aside>
          ) : (
            <div className={styles.noLinks}></div>
          )}
        </section>
        {introductionText && (
          <section
            className={styles.exhibitCopy}
            dangerouslySetInnerHTML={{
              __html: marked.parse(introductionText.introductionText),
            }}
          ></section>
        )}
      </article>
    </section>
  )
}

export default ArchiveFixedContent
