import React from "react"
import * as styles from "./linkButton.module.css"
import { IoTicket } from "react-icons/io5"
import { HiArrowDown, HiArrowRight, HiArrowUpRight } from "react-icons/hi2"

const LinkButton = ({ data, onFile }) => {
  let linkIcon
  if (data.linkIcon === "Tickets icon") {
    linkIcon = <IoTicket></IoTicket>
  } else if (data.linkIcon === "Upward diagonal arrow") {
    linkIcon = <HiArrowUpRight></HiArrowUpRight>
  } else if (data.linkIcon === "Right arrow") {
    linkIcon = <HiArrowRight></HiArrowRight>
  } else if (data.linkIcon === "Down arrow") {
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
