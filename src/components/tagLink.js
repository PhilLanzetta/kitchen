import React from "react"
import { Link } from "gatsby"
import * as styles from './tagLink.module.css'

const TagLink = ({ tag }) => {
  return <Link to={`/tags/${tag.contentful_id}`}className={styles.tagLink}>{tag.name}</Link>
}

export default TagLink
