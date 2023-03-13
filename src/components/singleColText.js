import React from "react"
import { marked } from "marked"
import * as styles from "./singleColText.module.css"

const SingleColText = ({ data }) => {
  return (
    <div
      className={styles.textContainer}
      dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
    ></div>
  )
}

export default SingleColText
