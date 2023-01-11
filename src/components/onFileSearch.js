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

const OnFileSearch = () => {
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

  const handleExpand = item => {
    if (ids.includes(item.id)) {
      setIds(ids.filter(id => id !== item.id))
    } else {
      setIds(ids.concat(item.id))
    }
  }

  const tableData = { nodes: data.allContentfulOnFileArchivePost.nodes }

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
          ></input>
        </label>
        <article className={styles.searchButtons}>
          <button>Exhibitions</button>
          <button>Talks</button>
          <button>Performance</button>
          <button>Dance</button>
          <button>Music</button>
          <button>Film/Video</button>
          <button>Literature</button>
        </article>
        <article className={styles.searchButtons}>
          <button>1970-79</button>
          <button>1980-89</button>
          <button>1990-99</button>
          <button>2000-09</button>
          <button>2010-19</button>
          <button>2020-now</button>
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
                      <td>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.featuredImage.description}
                        ></GatsbyImage>
                        <article>
                          {item.introductionHeading.introductionHeading}
                        </article>
                        <article>
                          <p>Artist(s): {item.artist}</p>
                          <p>
                            Date:{" "}
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
                          <Link to={`/on-file/${item.slug}`}>VIEW</Link>
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
