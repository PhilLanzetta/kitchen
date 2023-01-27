import React from "react"
import * as styles from "./onScreenVideoGrid.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TagLink from "./tagLink"

const OnScreenVideoGrid = ({ data }) => {
  return (
    <section className={styles.heroContainer}>
      {data.map(video => {
        return (
          <article key={video.node.id} className={styles.videoTile}>
            <GatsbyImage
              image={video.node.featuredImage.gatsbyImageData}
            ></GatsbyImage>
            <section>
              <Link
                to={`/on-screen/${video.node.slug}`}
                className={styles.videoLink}
              >
                <article className={styles.videoInfo}>
                  <p className={`tgnHeavy upper`}>
                    <span>{video.node.artist}</span>
                  </p>
                  <p className={`tgn`}>
                    <span>{`"${video.node.videoTitle}"`}</span>
                  </p>
                </article>
              </Link>
              <section className={styles.tagContainer}>
                {video.node.metadata.tags?.map(tag => (
                  <TagLink tag={tag} key={tag.id} light></TagLink>
                ))}
              </section>
            </section>
          </article>
        )
      })}
    </section>
  )
}

export default OnScreenVideoGrid
