import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table"
import {
  useSort,
  HeaderCellSort,
} from "@table-library/react-table-library/sort"
import { useTheme } from "@table-library/react-table-library/theme"
import * as styles from "./onFileSearch.module.css"
import THEME from "./onFileSearchTheme"
import { GatsbyImage } from "gatsby-plugin-image"

const OnFileSearch = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOnFileArchivePost {
        nodes {
          id
          artist
          category
          endDate
          title
          slug
          introductionHeading {
            introductionHeading
          }
          startDate
          featuredImage {
            description
            gatsbyImageData
          }
        }
      }
    }
  `)

  const [ids, setIds] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState(location.state?.category || "")
  const [year, setYear] = useState(location.state?.year || [])
  const [shuffle, setShuffle] = useState(location.state?.shuffle || false)

  const handleExpand = item => {
    if (ids.includes(item.id)) {
      setIds(ids.filter(id => id !== item.id))
    } else {
      setIds(ids.concat(item.id))
    }
  }

  const handleSearch = event => {
    setShuffle(false)
    setCategory("")
    setYear("")
    setSearch(event.target.value)
  }

  const handleCategoryClick = newCategory => {
    setShuffle(false)
    setSearch("")
    category === newCategory ? setCategory("") : setCategory(newCategory)
  }

  const handleYearClick = newYear => {
    setShuffle(false)
    setSearch("")
    year[0] === newYear[0] ? setYear([]) : setYear(newYear)
  }

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

  let shuffledData

  if (shuffle) {
    shuffledData = shuffleData(data.allContentfulOnFileArchivePost.nodes)
    setShuffle(false)
  }

  let tableData

  if (category && year.length > 0) {
    tableData = {
      nodes: data.allContentfulOnFileArchivePost.nodes.filter(item => {
        const date = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
        }).format(new Date(item.endDate))
        return (
          date >= year[0] && date <= year[1] && item.category.includes(category)
        )
      }),
    }
  } else if (year.length > 0) {
    tableData = {
      nodes: data.allContentfulOnFileArchivePost.nodes.filter(item => {
        const date = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
        }).format(new Date(item.endDate))
        return date >= year[0] && date <= year[1]
      }),
    }
  } else if (category) {
    tableData = {
      nodes: data.allContentfulOnFileArchivePost.nodes.filter(item =>
        item.category.includes(category)
      ),
    }
  } else if (shuffle) {
    tableData = {
      nodes: shuffledData,
    }
  } else {
    tableData = {
      nodes: data.allContentfulOnFileArchivePost.nodes.filter(
        item =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.artist.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.endDate.includes(search.toLowerCase())
      ),
    }
  }

  const sort = useSort(tableData, null, {
    sortFns: {
      TITLE: array => array.sort((a, b) => a.title.localeCompare(b.title)),
      AUTHOR: array =>
        array.sort((a, b) => a.artist[0].localeCompare(b.artist[0])),
      CATEGORY: array =>
        array.sort((a, b) => a.category.localeCompare(b.category)),
      YEAR: array =>
        array.sort((a, b) => new Date(a.endDate) - new Date(b.endDate)),
    },
  })

  const theme = useTheme(THEME)

  return (
    <>
      <section className={styles.inputsContainer}>
        <label htmlFor="search" className={styles.searchLabel}>
          Search
          <input
            id="search"
            type="text"
            placeholder="Type Here"
            className={styles.searchInput}
            value={search}
            onChange={handleSearch}
          ></input>
        </label>
        <article className={styles.searchButtons}>
          <button
            onClick={() => handleCategoryClick("Exhibitions")}
            className={`${category === "Exhibitions" ? styles.active : ""}`}
          >
            Exhibitions
          </button>
          <button
            onClick={() => handleCategoryClick("Talks")}
            className={`${category === "Talks" ? styles.active : ""}`}
          >
            Talks
          </button>
          <button
            onClick={() => handleCategoryClick("Performance")}
            className={`${category === "Performance" ? styles.active : ""}`}
          >
            Performance
          </button>
          <button
            onClick={() => handleCategoryClick("Dance")}
            className={`${category === "Dance" ? styles.active : ""}`}
          >
            Dance
          </button>
          <button
            onClick={() => handleCategoryClick("Music")}
            className={`${category === "Music" ? styles.active : ""}`}
          >
            Music
          </button>
          <button
            onClick={() => handleCategoryClick("Video")}
            className={`${category === "Video" ? styles.active : ""}`}
          >
            Film/Video
          </button>
          <button
            onClick={() => handleCategoryClick("Literature")}
            className={`${category === "Literature" ? styles.active : ""}`}
          >
            Literature
          </button>
        </article>
        <article className={styles.searchButtons}>
          <button
            onClick={() => handleYearClick([1970, 1979])}
            className={`${year.includes(1970) ? styles.active : ""}`}
          >
            1970-79
          </button>
          <button
            onClick={() => handleYearClick([1980, 1989])}
            className={`${year.includes(1980) ? styles.active : ""}`}
          >
            1980-89
          </button>
          <button
            onClick={() => handleYearClick([1990, 1999])}
            className={`${year.includes(1990) ? styles.active : ""}`}
          >
            1990-99
          </button>
          <button
            onClick={() => handleYearClick([2000, 2009])}
            className={`${year.includes(2000) ? styles.active : ""}`}
          >
            2000-09
          </button>
          <button
            onClick={() => handleYearClick([2010, 2019])}
            className={`${year.includes(2010) ? styles.active : ""}`}
          >
            2010-19
          </button>
          <button
            onClick={() => handleYearClick([2020, 2029])}
            className={`${year.includes(2020) ? styles.active : ""}`}
          >
            2020-now
          </button>
        </article>
      </section>
      <Table
        data={tableData}
        sort={sort}
        theme={theme}
        layout={{ custom: true }}
      >
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort sortKey="TITLE">TITLE</HeaderCellSort>
                <HeaderCellSort sortKey="AUTHOR">AUTHOR</HeaderCellSort>
                <HeaderCellSort sortKey="CATEGORY">CATEGORY</HeaderCellSort>
                <HeaderCellSort sortKey="YEAR">YEAR</HeaderCellSort>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map(item => (
                <React.Fragment key={item.id}>
                  <Row item={item}>
                    <Cell>{item.title}</Cell>
                    <Cell>{item.artist}</Cell>
                    <Cell>{item.category}</Cell>
                    <Cell>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                      }).format(new Date(item.endDate))}
                    </Cell>
                    <Cell>
                      <button onClick={() => handleExpand(item)}>
                        {ids.includes(item.id) ? "-" : "+"}
                      </button>
                    </Cell>
                  </Row>
                  {ids.includes(item.id) && (
                    <tr
                      style={{
                        display: "flex",
                        gridColumn: "1 / -1",
                        background: "#000",
                        color: "#fff",
                      }}
                    >
                      <td className={styles.previewRow}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.featuredImage.description}
                          className={styles.previewImg}
                        ></GatsbyImage>
                        <article className={styles.previewText}>
                          {item.introductionHeading.introductionHeading}
                        </article>
                        <article className={styles.previewInfo}>
                          <p>
                            <strong>Artist(s):</strong> {item.artist}
                          </p>
                          <p>
                            <strong>Date:</strong>{" "}
                            {new Intl.DateTimeFormat("en-US", {
                              month: "short",
                              day: "numeric",
                            }).format(new Date(item.startDate))}{" "}
                            -{" "}
                            {new Intl.DateTimeFormat("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }).format(new Date(item.endDate))}
                          </p>
                          <Link
                            to={`/on-file/${item.slug}`}
                            className={styles.viewBtn}
                          >
                            VIEW
                          </Link>
                        </article>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  )
}

export default OnFileSearch
