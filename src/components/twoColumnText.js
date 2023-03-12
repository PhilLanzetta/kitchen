import React from "react"
import * as styles from "./twoColumnText.module.css"
import { marked } from "marked"

const TwoColumnText = ({ data }) => {
  return (
    <section className={styles.columnContainer}>
      <div
        className={styles.twoColumn}
        dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
      ></div>
    </section>
  )
}

export default TwoColumnText
