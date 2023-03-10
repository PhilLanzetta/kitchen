import React from "react"
import * as styles from "./threeColumnText.module.css"
import { marked } from "marked"

const ThreeColumnText = ({ data }) => {
  return (
    <section className={styles.textContainer}>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}></div>
    </section>
  )
}

export default ThreeColumnText
