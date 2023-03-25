import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as styles from "./visitContact.module.css"

const VisitContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          contact {
            raw
          }
          phoneNumber
        }
      }
    }
  `)

  const renderOptions = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  const { contact, phoneNumber } = data.allContentfulVisitPage.nodes[0]

  const formattedPhone = phoneNumber.split("-").slice(1).join(" ")
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      {renderRichText(contact, renderOptions)}
      <p>
        Phone: <a href={`tel:${phoneNumber}`}>{formattedPhone}</a>
      </p>
    </section>
  )
}

export default VisitContact
