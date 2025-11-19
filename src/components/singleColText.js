import React from "react"
import { marked } from "marked"
import * as styles from "./singleColText.module.css"

const SingleColText = ({ data }) => {
  return (
    <div
      className={styles.textContainer}
      dangerouslySetInnerHTML={{
        __html: marked
          .parse(data.text)
          .replace(/href="h/g, `target="_blank" rel="noreferrer" href="h`)
          .replace(/href="\//g, `target="_blank" rel="noreferrer" href="/`),
      }}
    ></div>
  )
}

export default SingleColText
