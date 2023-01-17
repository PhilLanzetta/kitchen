import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./onMindHome.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import TagLink from "./tagLink"

const OnMindHome = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOnMindArticle(sort: { articleDate: DESC }) {
        nodes {
          articleDate
          category
          credits
          featuredImage {
            gatsbyImageData
            description
          }
          id
          slug
          title
          previewTextExcerpt
          metadata {
            tags {
              id
              name
            }
          }
        }
      }
    }
  `)

  const [fixed, setFixed] = useState(false)
  const headerRef = useRef()

  // Array of all onMind articles, updated by header buttons
  const [allData, setAllData] = useState(data.allContentfulOnMindArticle.nodes)

  // State for the list
  const [list, setList] = useState([...allData.slice(0, 7)])

  // State to trigger oad more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allData.length > 7)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allData.length
      const nextResults = isMore
        ? allData.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allData.length
    setHasMore(isMore)
  }, [list])

  const handleScroll = () => {
    const headerPosition = headerRef.current.getBoundingClientRect()
    if (headerPosition.bottom <= 50) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="ftp">
      <h1 className={`${styles.onMindBanner} ftpBold upper`} ref={headerRef}>
        On Mind
      </h1>
      <div className={`${fixed ? styles.fixedDiv : ""}`}></div>
      <section
        className={`${styles.buttonContainer} ${
          fixed ? styles.fixed : styles.relative
        }`}
      >
        <button>News</button>
        <button>Essays</button>
        <button>Conversations</button>
        <button>Diaries</button>
        <button>The Kitchen Archives</button>
      </section>
      <section
        className={`${styles.previewContainer} ${
          fixed ? styles.extraPadding : ""
        }`}
      >
        {list.map(post => (
          <article key={post.id}>
            <GatsbyImage
              image={post.featuredImage.gatsbyImageData}
              alt={post.featuredImage.description}
              className={styles.previewImg}
            ></GatsbyImage>
            <section className={styles.infoContainer}>
              <p className={styles.date}>
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.articleDate))}{" "}
              </p>
              <h2>{post.title}</h2>
              <p className={styles.excerpt}>{post.previewTextExcerpt}</p>
              <aside className={styles.creditTagContainer}>
                {post.credits.map((credit, index) => (
                  <p className={styles.credit} key={index}>
                    {credit}
                  </p>
                ))}
                <div className={styles.tagContainer}>
                  {post.metadata.tags.map(tag => (
                    <TagLink tag={tag} key={tag.id} light></TagLink>
                  ))}
                </div>
              </aside>
            </section>
          </article>
        ))}
      </section>
      <section className={styles.loadMore}>
        {hasMore ? (
          <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
            Explore More
          </button>
        ) : (
          <div></div>
        )}
      </section>
    </section>
  )
}

export default OnMindHome
