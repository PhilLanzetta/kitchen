import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./accessibility.module.css"

const Accessibility = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          accessibility {
            accessibility
          }
        }
      }
    }
  `)

  const { accessibility } = data.allContentfulVisitPage.nodes[0]
  return (
    <section className={styles.container}>
      <h2>Accessibility</h2>
      <p>{accessibility.accessibility}</p>
    </section>
  )
}

export default Accessibility
