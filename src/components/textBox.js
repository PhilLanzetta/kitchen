import React from "react"
import * as styles from './textBox.module.css'

const TextBox = ({ heading, text }) => {
  return (
    <section className={styles.textBox}>
      <h2>{heading}</h2>
      <p>{text}</p>
    </section>
  )
}

export default TextBox
