import React from "react"
import * as styles from './onFileYearLinks.module.css'

const OnFileYearLinks = () => {
  const dateRanges = [
    "1970-79",
    "1980-89",
    "1990-99",
    "2000-09",
    "2010-2019",
    "2020-now",
  ]
  return (
    <section className={`${styles.container} tge`}>
      <h2 className={styles.heading}>Explore by Year</h2>
      <article className={styles.yearBoxContainer}>
        {dateRanges.map((years, index) => (
          <section key={index} className={styles.yearBox}>
            {years}
          </section>
        ))}
      </article>
      <h2 className={`${styles.shuffle} ftpItalic upper`}>Shuffle</h2>
    </section>
  )
}

export default OnFileYearLinks
