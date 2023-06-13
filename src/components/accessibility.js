import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./accessibility.module.css"
import { marked } from "marked"

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
    <>
      <div id="accessibility" className={styles.anchor}></div>
      <section className={styles.container}>
        <h2>Accessibility</h2>
        <div
          style={{ display: "inline" }}
          dangerouslySetInnerHTML={{
            __html: marked.parse(accessibility.accessibility),
          }}
        ></div>
      </section>
    </>
  )
}

export default Accessibility
