import { Link } from "gatsby"
import { default as React } from "react"
import * as styles from "./searchResult.module.css"
import { connectStateResults, Hits, Index } from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const PageHit = ({ hit }) => {
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
          <p>{node?.title}</p>
          <p className={`${categoryClass}`}>{category}</p>
        </Link>
      )}
    </>
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

export default SearchResult
