import React from "react"
import { marked } from "marked"
import LinkButton from "./linkButton"

const SupportTile = ({ data }) => {
  const { title, descriptionText, links } = data
  return (
    <div>
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: marked.parse(descriptionText.descriptionText),
        }}
      ></div>
      {links.map(link => (
        <LinkButton data={link}></LinkButton>
      ))}
    </div>
  )
}

export default SupportTile
