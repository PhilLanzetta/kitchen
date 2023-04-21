import React from "react"
import * as styles from "./creditText.module.css"
import { marked } from "marked"

const CreditText = ({ data }) => {
  return (
    <>
      <div id="credits" className={styles.anchor}></div>
      <section
        className={styles.creditContainer}
        dangerouslySetInnerHTML={{ __html: marked.parse(data.text) }}
      ></section>
    </>
  )
}

export default CreditText
