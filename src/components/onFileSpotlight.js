import React from "react"
import OnFilePreview from "./onFilePreview"
import useWindowSize from "../utils/useWindowSize"
import Slider from "react-slick"
import * as styles from "./onFileSpotlight.module.css"
import LinkButton from "./linkButton"

const OnFileSpotlight = ({ data }) => {
  const { title, spotlightText, spotlightArchivePosts, externalLink } = data

  const { width } = useWindowSize()
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 2.25,
  }

  return (
    <section className={styles.container}>
      <h2 className="tge">{title}</h2>
      <p className={styles.introText}>{spotlightText?.spotlightText}</p>
      {externalLink && (
        <LinkButton
          data={externalLink}
          onFile={true}
          spotlight={true}
        ></LinkButton>
      )}
      {width > 920 && (
        <article className={`${styles.previewContainer} tge`}>
          {spotlightArchivePosts?.map(post => (
            <OnFilePreview key={post.id} data={post}></OnFilePreview>
          ))}
        </article>
      )}
      {width <= 920 && (
        <Slider {...settings} className="on-file-spotlight">
          {spotlightArchivePosts?.map(post => (
            <OnFilePreview key={post.id} data={post}></OnFilePreview>
          ))}
        </Slider>
      )}
    </section>
  )
}

export default OnFileSpotlight
