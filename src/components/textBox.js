import React from "react"
import * as styles from "./textBox.module.css"
import { marked } from "marked"

const TextBox = ({ text }) => {
  return (
    <section
      className={styles.textBox}
      dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
    >
    </section>
  )
}

export default TextBox
