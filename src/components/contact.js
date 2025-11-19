import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { marked } from "marked"
import * as styles from "./visitContact.module.css"

const Contact = ({ text }) => {
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </section>
  )
}

export default Contact
