import React from "react"
import * as styles from "./onMindFixedContent.module.css"
import TagLink from "./tagLink"
import { marked } from "marked"

const OnMindFixedContent = ({ data }) => {
  const { credits, title, articleDate, metadata, introductionText } = data

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
        <h1 className={styles.title}>{title}</h1>
      </article>
      <article className={styles.exhibitInfo}>
        <section className={styles.exhibitDetails}>
          <article>
            <p className={styles.creditsLabel}>
              <strong>Credits:</strong>
            </p>
            {credits.map(item => {
              const text = item.split(":")
              return (
                <p className={styles.creditItem}>
                  <strong className={styles.creditPrefix}>
                    {text[1] ? `${text[0]}:` : ""}
                  </strong>{" "}
                  {text[1] ? text[1] : text[0]}
                </p>
              )
            })}
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
          <p className={`${styles.date} tgn upper`}>{dateOfArticle}</p>
          {introductionText && (
            <article
              dangerouslySetInnerHTML={{
                __html: marked.parse(introductionText.introductionText),
              }}
            ></article>
          )}
        </section>
      </article>
    </section>
  )
}

export default OnMindFixedContent
