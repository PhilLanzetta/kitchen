import React from "react"
import { Link } from "gatsby"
import * as styles from "./onMindArticleHeader.module.css"

const OnMindArticleHeader = ({ category }) => {
  return (
    <>
      <div className={styles.fixedDiv}></div>
      <section className={styles.buttonContainer}>
        <Link
          to="/on-mind"
          state={{ category: "News" }}
          className={`${
            category === "News" ? styles.active : styles.hoverUnderline
          }`}
        >
          News
        </Link>
        <Link
          to="/on-mind"
          state={{ category: "Essays" }}
          className={`${
            category === "Essays" ? styles.active : styles.hoverUnderline
          }`}
        >
          Essays
        </Link>
        <Link
          to="/on-mind"
          state={{ category: "Conversations" }}
          className={`${
            category === "Conversations" ? styles.active : styles.hoverUnderline
          }`}
        >
          Conversations
        </Link>
        <Link
          to="/on-mind"
          state={{ category: "From the Archives" }}
          className={`${
            category === "From the Archives"
              ? styles.active
              : styles.hoverUnderline
          }`}
        >
          The Kitchen Archives
        </Link>
      </section>
    </>
  )
}

export default OnMindArticleHeader
