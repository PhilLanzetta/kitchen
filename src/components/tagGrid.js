import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TagLink from "./tagLink"
import * as styles from './tagGrid.module.css'

const TagGrid = ({ data }) => {
  return (
    <section className={styles.container}>
      {data.map(node => {
        let category
        if (node.onFileSlug) {
          category = {
            label: <p className="tge">On File</p>,
            slug: `/on-file/${node.onFileSlug}`,
          }
        } else if (node.onMindSlug) {
          category = {
            label: <p className="ftp">On Mind</p>,
            slug: `/on-mind/${node.onMindSlug}`,
          }
        } else if (node.onScreenSlug) {
          category = {
            label: <p className="tgnHeavy upper">On Screen</p>,
            slug: `/on-screen/${node.onScreenSlug}`,
          }
        } else {
          category = {
            label: <p className="tgnHeavyItalic upper">On View</p>,
            slug: `/on-view/${node.onViewSlug}`,
          }
        }

        return (
          <article key={node.id} className={styles.item}>
            <Link to={category.slug}>
              <GatsbyImage
                image={node.featuredImage.image.gatsbyImageData}
                alt={node.featuredImage.image.description}
              ></GatsbyImage>
              <section>
                <article className={styles.info}>
                  <div>
                    <h2 className={`${styles.heading} ${styles.artist}`}>{node.artist}</h2>
                    <h3 className={styles.heading}>
                      {node.videoTitle || node.exhibitionTitle || node.title}
                    </h3>
                  </div>
                  {category.label}
                </article>
              </section>
            </Link>
            <section className={styles.tagContainer}>
              {node.metadata.tags.map(tag => (
                <TagLink tag={tag} key={tag.id} light></TagLink>
              ))}
            </section>
          </article>
        )
      })}
    </section>
  )
}

export default TagGrid
