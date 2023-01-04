import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./linkButton.module.css"

const LinkButton = ({ data, light }) => {
  return (
    <a
      href={data.pdfId ? data.pdf.url : data.linkUrl}
      className={styles.linkButton}
    >
      <p>{data.linkText}</p>
      {data.linkIcon && (
        <img src={data.linkIcon.url} alt={data.linkIcon.description}></img>
      )}
    </a>
  )
}

export default LinkButton
