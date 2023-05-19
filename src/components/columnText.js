import React from "react"
import useWindowSize from "../utils/useWindowSize"
import { marked } from "marked"

const ColumnText = ({ data }) => {
  const { width } = useWindowSize()
  const styles = {
    columnCount: width > 700 ? data.numberOfColumns : "1",
    padding: "20px",
    columnGap: "20px",
  }
  return (
    <div
      style={styles}
      dangerouslySetInnerHTML={{ __html: marked.parse(data.text.text) }}
    ></div>
  )
}

export default ColumnText
