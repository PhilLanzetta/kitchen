import { Link } from "gatsby"
import React from "react"
import { HiArrowUpRight } from "react-icons/hi2"
import * as styles from "./visitLink.module.css"

const VisitLink = ({ text, slug }) => {
  return (
    <Link to={slug} className={styles.link}>
      {text}&nbsp; <HiArrowUpRight></HiArrowUpRight>
    </Link>
  )
}

export default VisitLink
