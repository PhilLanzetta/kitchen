import React from "react"
import { Link } from "gatsby"
import * as styles from "./pagination.module.css"

const Pagination = ({ data, location }) => {
  const { currentPage, numPages, vidNumPages } = data
  return (
    <section className={styles.pageNumberContainer}>
      {Array.from({ length: numPages || vidNumPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`${location}/${i === 0 ? "" : i + 1}`}
          className={styles.pageLink}
          activeClassName={styles.active}
        >
          {i + 1}
        </Link>
      ))}
    </section>
  )
}

export default Pagination
