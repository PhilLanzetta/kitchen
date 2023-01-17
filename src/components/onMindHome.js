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
        {data.allContentfulOnMindArticle.nodes.map(post => (
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
    </section>
  )
}

export default OnMindHome
