import React from "react"
import useWindowSize from "../utils/useWindowSize"

const ColumnText = ({ data }) => {
  const { width } = useWindowSize()
  const styles = {
    columnCount: width > 700 ? data.numberOfColumns : "2",
    padding: "20px",
    columnGap: "20px",
  }
  return <div style={styles}>{data.text.text}</div>
}

export default ColumnText
