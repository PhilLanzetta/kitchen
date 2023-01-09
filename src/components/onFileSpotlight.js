import React from "react"
import OnFilePreview from "./onFilePreview"
import * as styles from "./onFileSpotlight.module.css"

const OnFileSpotlight = ({ data }) => {
  const { title, spotlightText, spotlightArchivePosts } = data
  return (
    <section className={styles.container}>
      <h2 className="tge">Spotlight: {title}</h2>
      <p className={styles.introText}>{spotlightText.spotlightText}</p>
      <article className={`${styles.previewContainer} tge`}>
        {spotlightArchivePosts.map(post => (
          <OnFilePreview key={post.id} data={post}></OnFilePreview>
        ))}
      </article>
    </section>
  )
}

export default OnFileSpotlight
