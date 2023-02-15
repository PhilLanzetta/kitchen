import React from "react"
import * as styles from "./linkButton.module.css"
import { IoTicket } from "react-icons/io5"
import { HiArrowDown, HiArrowRight, HiArrowUpRight } from "react-icons/hi2"

const LinkButton = ({ data, onFile }) => {
  let linkIcon
  if (data.linkIcon === "Tickets Icon") {
    linkIcon = <IoTicket></IoTicket>
  } else if (data.linkIcon === "Upward Diagonal Arrow") {
    linkIcon = <HiArrowUpRight></HiArrowUpRight>
  } else if (data.linkIcon === "Right Arrow") {
    linkIcon = <HiArrowRight></HiArrowRight>
  } else if (data.linkIcon === "Down Arrow") {
    linkIcon = <HiArrowDown></HiArrowDown>
  } else {
    linkIcon = null
  }

  return (
    <a
      href={data.pdfId ? data.pdf.url : data.linkUrl}
      className={`${styles.linkButton} ${onFile ? styles.onFile : ""}`}
    >
      <p>{data.linkText}</p>
      {data.linkIcon && linkIcon}
    </a>
  )
}

export default LinkButton
