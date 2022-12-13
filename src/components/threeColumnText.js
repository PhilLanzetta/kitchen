import React from 'react'
import * as styles from './threeColumnText.module.css'

const ThreeColumnText = ({data}) => {
  return (
    <section className={styles.textContainer}>
      <p>{data.text}</p>
    </section>
  )
}

export default ThreeColumnText