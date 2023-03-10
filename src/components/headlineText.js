import React from "react"
import * as styles from "./headlineText.module.css"
import { marked } from "marked"

const HeadlineText = ({ data }) => {
  return (
    <section
      className={`${styles.textBox} ${data.border ? styles.border : ""} ${
        data.screenWidth === "Half Page" ? styles.half : ""
      }`}
    >
      <span className={styles.headline}>{data.headline}</span>{" "}
      <span
        className={styles.text}
        dangerouslySetInnerHTML={{
          __html: marked.parse(data.paragraphText.paragraphText),
        }}
      ></span>
    </section>
  )
}

export default HeadlineText
