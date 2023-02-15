import React from "react"
import * as styles from "./headlineText.module.css"

const HeadlineText = ({ data }) => {
  console.log(data)
  return (
    <section
      className={`${styles.textBox} ${data.border ? styles.border : ""} ${
        data.screenWidth === "Half Page" ? styles.half : ""
      }`}
    >
      <span>{data.headline}</span> {data.paragraphText.paragraphText}
    </section>
  )
}

export default HeadlineText
