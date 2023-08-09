import React from "react"
import ReactPlayer from "react-player"
import * as styles from "./fullWidthVideo.module.css"

const FullWidthVideo = ({ data, inText }) => {
  return (
    <section
      className={
        inText ? styles.videoPlayerWrapper : styles.videoPlayerWrapperFull
      }
    >
      <ReactPlayer
        url={
          data.videoId
            ? `https://player.vimeo.com/video/${data.videoId}`
            : `https://www.youtube.com/watch?v=${data.youtubeVideoId}`
        }
        controls
        width={"100%"}
        height={"100%"}
        className={styles.videoPlayer}
      ></ReactPlayer>
      <figcaption className={styles.videoCredit}>{data.videoCredit}</figcaption>
    </section>
  )
}

export default FullWidthVideo
