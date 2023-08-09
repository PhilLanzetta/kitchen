import React from "react"
import useWindowSize from "../utils/useWindowSize"
import { marked } from "marked"
import * as styles from "./columnText.module.css"

const ColumnText = ({ data }) => {
  const { width } = useWindowSize()
  const divStyles = {
    columnCount: width > 700 ? data.numberOfColumns : "1",
    padding: "20px",
    columnGap: "20px",
  }
  return (
    <div
      style={divStyles}
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: marked.parse(data.text.text) }}
    ></div>
  )
}

export default ColumnText
