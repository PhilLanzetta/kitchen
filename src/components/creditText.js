import React from "react"
import * as styles from './creditText.module.css'

const CreditText = ({ data }) => {
  return (
    <section className={styles.creditContainer}>
      <p>{data.text}</p>
    </section>
  )
}

export default CreditText
