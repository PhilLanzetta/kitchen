import React from "react"
import * as styles from "./blockQuote.module.css"

const BlockQuote = ({ data, font }) => {
  return (
    <section className={styles.quoteContainer}>
      <h2 className={`${font ? `${font}Italic` : "tgnHeavy"}`}>
        {data.quote.quote}
      </h2>
      <p className={styles.author}>{data.author}</p>
    </section>
  )
}

export default BlockQuote
