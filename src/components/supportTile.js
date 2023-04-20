import React from "react"
import { marked } from "marked"
import * as styles from "./supportTile.module.css"
import { Link } from "gatsby"

const SupportTile = ({ data, headingClass }) => {
  const { title, descriptionText, learnMoreLink } = data
  return (
    <div className={styles.container}>
      <h3 className={styles[headingClass]}>{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: marked.parse(descriptionText.descriptionText),
        }}
      ></div>
      <Link className={styles.linkButton} to={learnMoreLink}>
        Learn More
      </Link>
    </div>
  )
}

export default SupportTile
