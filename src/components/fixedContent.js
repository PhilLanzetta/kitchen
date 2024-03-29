import React from "react"
import * as styles from "./fixedContent.module.css"
import LinkButton from "./linkButton"
import TagLink from "./tagLink"
import { marked } from "marked"

const FixedContent = ({ data }) => {
  const {
    artist,
    exhibitionTitle,
    videoTitle,
    startDate,
    endDate,
    metadata,
    openingHours,
    exhibitionLocation,
    links,
    exhibitionHours,
    introductionText,
    screeningTime,
    onViewLocation,
  } = data

  const dateOptions = {
    month: "long",
    day: "numeric",
  }

  const fullDateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  const exhibitStart = new Intl.DateTimeFormat("en-US", dateOptions).format(
    new Date(startDate)
  )

  let exhibitEnd

  if (endDate) {
    if (new Date().getFullYear() > new Date(endDate).getFullYear()) {
      exhibitEnd = new Intl.DateTimeFormat("en-US", fullDateOptions).format(
        new Date(endDate)
      )
    } else {
      exhibitEnd = new Intl.DateTimeFormat("en-US", dateOptions).format(
        new Date(endDate)
      )
    }
  }

  return (
    <section className={styles.fixedSection}>
      <article className={styles.heading}>
        <h1 className="tgnHeavy upper">{artist}</h1>
        <h2 className="tgnHeavyItalic upper">
          {exhibitionTitle || videoTitle}
        </h2>
      </article>
      <article className={styles.exhibitInfo}>
        <section className={styles.exhibitDetails}>
          <article>
            <p className="tgnBold upper">
              On View:{" "}
              {exhibitStart === exhibitEnd || exhibitEnd === undefined
                ? exhibitStart
                : `${exhibitStart}-${exhibitEnd}`}
            </p>
            <p>{exhibitionLocation || onViewLocation}</p>
          </article>
          {openingHours && (
            <article>
              <p className="tgnBold upper">Opening day hours:</p>
              <p>{openingHours}</p>
            </article>
          )}
          {exhibitionHours && (
            <article>
              <p className="tgnBold upper">Time:</p>
              <p>{exhibitionHours}</p>
            </article>
          )}
          {screeningTime && (
            <article>
              <p className="tgnBold upper">Screening Time</p>
              <p>{screeningTime}</p>
            </article>
          )}
          {metadata?.tags && (
            <aside className={styles.tagContainer}>
              {metadata.tags.map(tag => (
                <TagLink key={tag.id} tag={tag} light={true}></TagLink>
              ))}
            </aside>
          )}
          {links?.map && (
            <aside className={styles.linksContainer}>
              {links.map((item, index) => (
                <LinkButton key={index} data={item}></LinkButton>
              ))}
            </aside>
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

export default FixedContent
