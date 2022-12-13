import React from 'react'
import * as styles from './twoColumnText.module.css'

const TwoColumnText = ({data}) => {
  return (
    <section className={styles.columnContainer}>
      <p className={styles.twoColumn}>{data.text}</p>
    </section>
  )
}

export default TwoColumnText