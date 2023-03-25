import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./searchBox"
import SearchResult from "./searchResult"
import useClickOutside from "../utils/useClickOutside"
import * as styles from './search.module.css'

export default function Search({ indices }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <div ref={rootRef} className={styles.searchContainer}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
}
