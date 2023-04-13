import React from "react"
import { Link } from "gatsby"
import { HiArrowUpRight } from "react-icons/hi2"
import * as styles from "./flexLinkBox.module.css"

const FlexLinkBox = ({ data }) => {
  return (
    <>
      {data.internalLink ? (
        <Link
          to={data.linkUrl}
          className={`${styles.linkBox} ${
            data.size === "Half-page box" ? styles.half : styles.quarter
          }`}
        >
          {data.linkText} <HiArrowUpRight></HiArrowUpRight>
        </Link>
      ) : (
        <a
          href={data.linkUrl}
          target="_blank"
          rel="noreferrer"
          className={`${styles.linkBox} ${
            data.size === "Half-page box" ? styles.half : styles.quarter
          }`}
        >
          {data.linkText} <HiArrowUpRight></HiArrowUpRight>
        </a>
      )}
    </>
  )
}

export default FlexLinkBox
