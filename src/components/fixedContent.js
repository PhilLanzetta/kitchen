import React from "react"
import * as styles from "./fixedContent.module.css"
import LinkButton from "./linkButton"
import TagLink from "./tagLink"

const FixedContent = ({ data }) => {
  const {
    artist,
    exhibitionTitle,
    startDate,
    endDate,
    metadata,
    openingHours,
    exhibitionLocation,
    links,
    exhibitionHours,
    introductionHeading,
    introductionBody,
  } = data

  const dateOptions = {
    month: "long",
    day: "numeric",
  }

  const exhibitStart = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(startDate)
  )

  const exhibitEnd = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(endDate)
  )
  return (
    <section className={styles.fixedSection}>
      <article className={styles.heading}>
        <h1 className="tgnHeavy upper">{artist}</h1>
        <h2 className="tgnHeavyItalic upper">{exhibitionTitle}</h2>
      </article>
      <article className={styles.exhibitInfo}>
        <section className={styles.exhibitDetails}>
          <article>
            <p className="tgnBold upper">
              On View: {exhibitStart}-{exhibitEnd}
            </p>
            <p>{exhibitionLocation}</p>
          </article>
          {openingHours && (
            <article>
              <p className="tgnBold upper">Opening day hours:</p>
              <p>{openingHours}</p>
            </article>
          )}
          {exhibitionHours && (
            <article>
              <p className="tgnBold upper">Exhibition Hours:</p>
              <p>{exhibitionHours}</p>
            </article>
          )}
          {metadata?.tags && (
            <article className={styles.tagContainer}>
              {metadata.tags.map(tag => (
                <TagLink key={tag.id} tag={tag} light={true}></TagLink>
              ))}
            </article>
          )}
          {links?.map((item, index) => (
            <LinkButton key={index} data={item}></LinkButton>
          ))}
        </section>
        <section className={styles.exhibitCopy}>
          <h3>{introductionHeading?.introductionHeading}</h3>
          <p>{introductionBody?.introductionBody}</p>
        </section>
      </article>
    </section>
  )
}

export default FixedContent
