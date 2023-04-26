import React from "react"
import * as styles from "./onScreenVideoGrid.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import TagLink from "./tagLink"

const OnScreenVideoGrid = ({ data }) => {
  return (
    <section className={styles.heroContainer}>
      {data?.map(video => {
        return (
          <>
            {video.node?.videoTitle !== "Dummy" && (
              <article
                key={video.node?.id || video.id}
                className={styles.videoTile}
              >
                <GatsbyImage
                  image={
                    video?.node?.featuredImage?.image?.gatsbyImageData ||
                    video?.featuredImage?.image?.gatsbyImageData
                  }
                  alt={
                    video?.node?.featuredImage?.image?.description ||
                    video?.featuredImage?.image?.description
                  }
                ></GatsbyImage>
                <section>
                  <article className={styles.videoLinks}>
                    <Link
                      to={`/on-screen/${video.node?.slug || video.slug}`}
                      className={styles.videoLink}
                    >
                      <article className={styles.videoInfo}>
                        <p className={`tgnHeavy upper`}>
                          <span>{video.node?.artist || video.artist}</span>
                        </p>
                        <p className={`tgn`}>
                          <span>{`"${
                            video.node?.videoTitle || video.videoTitle
                          }"`}</span>
                        </p>
                      </article>
                    </Link>
                    {video.node?.seriesLabel && (
                      <aside className={styles.series}>
                        {video.node.seriesLabel}
                      </aside>
                    )}
                  </article>
                  <section className={styles.tagContainer}>
                    {video.node?.metadata.tags?.map(tag => (
                      <TagLink tag={tag} key={tag.id} light></TagLink>
                    )) ||
                      video.metadata.tags?.map(tag => (
                        <TagLink tag={tag} key={tag.id} light></TagLink>
                      ))}
                  </section>
                </section>
              </article>
            )}
          </>
        )
      })}
    </section>
  )
}

export default OnScreenVideoGrid
