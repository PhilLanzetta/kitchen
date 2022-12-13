import React from "react"
import * as styles from "./audioFilePlayer.module.css"
import AudioPlayer from "react-h5-audio-player"

const AudioFilePlayer = ({ data }) => {
  return (
    <section className={styles.audioContainer}>
      <p>{data.title}</p>
      <p>{data.audioDescription}</p>
      <AudioPlayer
        src={data.audioFile.file.url}
        layout={"horizontal-reverse"}
        showJumpControls={false}
        className={styles.audioPlayer}
      ></AudioPlayer>
    </section>
  )
}

export default AudioFilePlayer
