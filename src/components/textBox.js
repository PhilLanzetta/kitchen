import React from "react"
import * as styles from "./textBox.module.css"
import { marked } from "marked"

const TextBox = ({ text, values }) => {
  return (
    <section
      className={`${styles.textBox} ${values ? styles.values : ""}`}
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    ></section>
  )
}

export default TextBox
