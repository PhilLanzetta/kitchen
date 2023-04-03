import React, { useState, useEffect, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import * as styles from "./onMindHome.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import TagLink from "./tagLink"
import useWindowSize from "../utils/useWindowSize"
import { marked } from "marked"

const OnMindHome = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOnMindArticle(sort: { articleDate: DESC }) {
        nodes {
          articleDate
          category
          credits {
            credits
          }
          backgroundColor
          featuredImage {
            creditText
            image {
              description
              gatsbyImageData
            }
          }
          id
          slug
          title
          previewTextExcerpt
          metadata {
            tags {
              id
              name
              contentful_id
            }
          }
        }
      }
    }
  `)

  const [fixed, setFixed] = useState(false)
  const { width } = useWindowSize()
  const [threshold, setThreshold] = useState(width > 920 ? 60 : 100)
  const headerRef = useRef()

  // Array of all onMind articles, updated by header buttons
  const [category, setCategory] = useState(location.state?.category || "")
  const [allData, setAllData] = useState(
    data.allContentfulOnMindArticle.nodes.filter(item =>
      item.category.includes(category)
    )
  )

  // State for the list
  const [list, setList] = useState([...allData.slice(0, 7)])

  const scrollToTop = () =>
    headerRef.current.scrollIntoView({ behavior: "smooth" })

  // Handle change in category
  const handleCategoryClick = newCategory => {
    if (category === newCategory) {
      scrollToTop()
      setCategory("")
      setAllData(data.allContentfulOnMindArticle.nodes)
    } else {
      scrollToTop()
      setCategory(newCategory)
      setAllData(
        data.allContentfulOnMindArticle.nodes.filter(item =>
          item.category.includes(newCategory)
        )
      )
    }
  }

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allData.length > 7)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    setList([...allData.slice(0, 7)])
  }, [allData])

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allData.length
      const nextResults = isMore
        ? allData.slice(currentLength, currentLength + 7)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, allData, list])

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allData.length
    setHasMore(isMore)
  }, [list, allData.length])

  const handleScroll = () => {
    const headerPosition = headerRef.current.getBoundingClientRect()
    if (headerPosition.bottom <= threshold) {
      setFixed(true)
    } else {
      setFixed(false)
    }
  }

  const handleScrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
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
        <button
          onClick={() => handleCategoryClick("News")}
          className={`${
            category === "News" ? styles.active : styles.hoverUnderline
          }`}
        >
          News
        </button>
        <button
          onClick={() => handleCategoryClick("Essays")}
          className={`${
            category === "Essays" ? styles.active : styles.hoverUnderline
          }`}
        >
          Essays
        </button>
        <button
          onClick={() => handleCategoryClick("Conversations")}
          className={`${
            category === "Conversations" ? styles.active : styles.hoverUnderline
          }`}
        >
          Conversations
        </button>
        <button
          onClick={() => handleCategoryClick("Diaries")}
          className={`${
            category === "Diaries" ? styles.active : styles.hoverUnderline
          }`}
        >
          Diaries
        </button>
        <button
          onClick={() => handleCategoryClick("The Kitchen Archives")}
          className={`${
            category === "The Kitchen Archives"
              ? styles.active
              : styles.hoverUnderline
          }`}
        >
          The Kitchen Archives
        </button>
      </section>
      <section
        className={`${styles.previewContainer} ${
          fixed ? styles.extraPadding : ""
        }`}
      >
        {list.map(post => (
          <article key={post.id}>
            <Link to={`/on-mind/${post.slug}`}>
              <GatsbyImage
                image={post.featuredImage.image.gatsbyImageData}
                alt={post.featuredImage.image.description}
                className={styles.previewImg}
              ></GatsbyImage>
            </Link>
            <div
              className={styles.background}
              style={{ background: `#${post.backgroundColor}` }}
            ></div>
            <section className={styles.infoContainer}>
              <p className={styles.date}>
                {new Intl.DateTimeFormat("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(post.articleDate))}{" "}
              </p>
              <Link to={`/on-mind/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p className={styles.excerpt}>{post.previewTextExcerpt}</p>
              <aside className={styles.creditTagContainer}>
                {post.credits && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(post.credits.credits),
                    }}
                  ></div>
                )}
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
          <button onClick={handleScrollToTop} className={styles.loadMoreBtn}>
            Back to top
          </button>
        )}
      </section>
    </section>
  )
}

export default OnMindHome
