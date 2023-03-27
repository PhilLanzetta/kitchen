import { Link } from "gatsby"
import { default as React } from "react"
import * as styles from "./searchResult.module.css"

const Hit = ({ hit }) => {
  const { node, category } = hit.pageContext
  let categoryClass = ""

  if (category === "On View") {
    categoryClass = styles.onView
  } else if (category === "On Screen") {
    categoryClass = styles.onScreen
  } else if (category === "On Mind") {
    categoryClass = styles.onMind
  } else if (category === "On File") {
    categoryClass = styles.onFile
  }

  return (
    <>
      {hit.path !== "/" && hit.path !== "/404/" && hit.path !== "/404.html" && (
        <Link to={hit.path} className={styles.pageHitContainer}>
          <p className={styles.title}>{node?.title}</p>
          <p className={`${categoryClass}`}>{category}</p>
        </Link>
      )}
    </>
  )
}

export default Hit
