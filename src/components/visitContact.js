import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { marked } from "marked"
import * as styles from "./visitContact.module.css"

const VisitContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          contact {
            contact
          }
        }
      }
    }
  `)

  const { contact } = data.allContentfulVisitPage.nodes[0]

  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(contact.contact) }}
      ></div>
    </section>
  )
}

export default VisitContact
