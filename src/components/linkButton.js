import React from "react"
import * as styles from "./linkButton.module.css"
import { IoTicket } from "react-icons/io5"
import { HiArrowDown, HiArrowRight, HiArrowUpRight } from "react-icons/hi2"
import { Link } from "gatsby"

const LinkButton = ({ data, onFile }) => {
  let linkIcon
  if (data.linkIcon?.toLowerCase() === "tickets icon") {
    linkIcon = <IoTicket></IoTicket>
  } else if (data.linkIcon?.toLowerCase() === "upward diagonal arrow") {
    linkIcon = <HiArrowUpRight></HiArrowUpRight>
  } else if (data.linkIcon?.toLowerCase() === "right arrow") {
    linkIcon = <HiArrowRight></HiArrowRight>
  } else if (data.linkIcon?.toLowerCase() === "down arrow") {
    linkIcon = <HiArrowDown></HiArrowDown>
  } else {
    linkIcon = null
  }

  return (
    <>
      {data.pdfId && (
        <a
          href={data.pdf?.url}
          className={`${styles.linkButton} ${onFile ? styles.onFile : ""}`}
        >
          <p>{data.linkText}</p>
          {data.linkIcon && linkIcon}
        </a>
      )}
      {data.linkId && (
        <a
          href={data.linkUrl}
          className={`${styles.linkButton} ${onFile ? styles.onFile : ""}`}
          target="_blank"
          rel="noreferrer"
        >
          <p>{data.linkText}</p>
          {data.linkIcon && linkIcon}
        </a>
      )}
      {data.tixId && (
        <Link
          to="/tickets/"
          className={styles.linkButton}
          state={{ production: data.productionId }}
        >
          <p>Tickets</p>
          <IoTicket></IoTicket>
        </Link>
      )}
    </>
  )
}

export default LinkButton
