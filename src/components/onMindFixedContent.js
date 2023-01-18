import React from "react"
import * as styles from "./archiveFixedContent.module.css"
import LinkButton from "./linkButton"
import TagLink from "./tagLink"

const OnMindFixedContent = ({ data }) => {
  const {
    credits,
    title,
    articleDate,
    metadata,
    introductionHeading,
    introductionBody,
  } = data

  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  const dateOfArticle = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(articleDate)
  )

  return (
    <section className={styles.fixedSection}>
      <article className={styles.heading}>
        <h1 className="tge upper">{title}</h1>
      </article>
      <article className={styles.exhibitInfo}>
        <section className={styles.exhibitDetails}>
          <article>
           <p>Credits:</p>
            {credits.map(item => (
              <p>{item}</p>
            ))}
          </article>
          {metadata?.tags && (
            <article className={styles.tagContainer}>
              {metadata.tags.map(tag => (
                <TagLink key={tag.id} tag={tag} light={true}></TagLink>
              ))}
            </article>
          )}
        </section>
        <section className={styles.exhibitCopy}>
          <p>{dateOfArticle}</p>
          <h3>{introductionHeading?.introductionHeading}</h3>
          <p>{introductionBody?.introductionBody}</p>
        </section>
      </article>
    </section>
  )
}

export default OnMindFixedContent
