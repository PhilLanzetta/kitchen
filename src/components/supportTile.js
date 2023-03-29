import React from "react"
import { marked } from "marked"
import LinkButton from "./linkButton"
import * as styles from "./supportTile.module.css"

const SupportTile = ({ data, headingClass }) => {
  const { title, descriptionText, links } = data
  return (
    <div className={styles.container}>
      <h3 className={styles[headingClass]}>{title}</h3>
      <div
        dangerouslySetInnerHTML={{
          __html: marked.parse(descriptionText.descriptionText),
        }}
      ></div>
      <div className={styles.linkContainer}>
        {links.map(link => (
          <LinkButton data={link}></LinkButton>
        ))}
      </div>
    </div>
  )
}

export default SupportTile
