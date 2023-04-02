import algoliasearch from "algoliasearch/lite"
import { default as React, useMemo } from "react"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  useInstantSearch,
} from "react-instantsearch-hooks-web"
import Hit from "./searchResult"
import * as styles from "./search.module.css"

function NoResultsBoundary({ children, fallback }) {
  const { results } = useInstantSearch()

  // The `__isArtificial` flag makes sure not to display the No Results message
  // when no hits have been returned yet.
  if (!results.__isArtificial && results.nbHits === 0) {
    return (
      <>
        {fallback}
        <div hidden>{children}</div>
      </>
    )
  }

  return children
}

function NoResults() {
  const { indexUiState } = useInstantSearch()

  return (
    <div className={styles.noContainer}>
      <p className={styles.noResult}>
        No results for <q>{indexUiState.query}</q>.
      </p>
    </div>
  )
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch()

  if (!indexUiState.query) {
    return fallback
  }

  return children
}

export default function Search({ indices, initialSearch }) {
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY
      ),
    []
  )

  return (
    <div className={styles.searchContainer}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        initialUiState={{ Page: { query: initialSearch?.value } }}
      >
        <SearchBox
          placeholder="Search our Site"
          searchAsYouType={false}
          classNames={{
            root: styles.searchBox,
            form: styles.searchForm,
            input: styles.searchInput,
            reset: styles.searchReset,
          }}
        />
        <EmptyQueryBoundary fallback={null}>
          <NoResultsBoundary fallback={<NoResults />}>
            <Hits hitComponent={Hit} />
          </NoResultsBoundary>
          <Pagination
            showFirst={false}
            showLast={false}
            showNext={false}
            showPrevious={false}
            classNames={{
              root: styles.paginationContainer,
              list: styles.paginationList,
              item: styles.paginationItem,
              selectedItem: styles.selected,
              firstPageItem: styles.arrow,
              previousPageItem: styles.arrow,
              lastPageItem: styles.arrow,
              nextPageItem: styles.arrow,
              disabledItem: styles.disabled,
            }}
          />
        </EmptyQueryBoundary>
      </InstantSearch>
    </div>
  )
}
