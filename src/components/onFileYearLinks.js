import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "./onFileYearLinks.module.css"

const OnFileYearLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOnFileArchivePost(limit: 1000) {
        nodes {
          slug
        }
      }
    }
  `)

  const shuffleData = array => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const randomArchive = shuffleData(data.allContentfulOnFileArchivePost.nodes)

  const dateRanges = [
    [1970, 1979],
    [1980, 1989],
    [1990, 1999],
    [2000, 2009],
    [2010, 2019],
    [2020, 2029],
  ]

  return (
    <section className={`${styles.container} tge`}>
      <h2 className={styles.heading}>Explore by Year</h2>
      <article className={styles.yearBoxContainer}>
        {dateRanges.map((years, index) => {
          let endDate
          if (years[1] === 2029) {
            endDate = "now"
          } else {
            endDate = years[1].toString().slice(2)
          }
          return (
            <Link
              to="/on-file/search"
              key={index}
              className={styles.yearBox}
              state={{ year: years }}
            >
              {`${years[0]}-${endDate}`}
            </Link>
          )
        })}
      </article>
      <Link
        to={`/on-file/${randomArchive[0].slug}`}
        className={`${styles.shuffle} ftpItalic upper`}
      >
        Shuffle
      </Link>
    </section>
  )
}

export default OnFileYearLinks
