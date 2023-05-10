import React from "react"
import * as styles from "./audioFilePlayer.module.css"
import AudioPlayer from "react-h5-audio-player"

const AudioFilePlayer = ({ data, dark }) => {
  console.log(data)
  return (
    <section className={`${styles.audioContainer} ${dark ? styles.dark : ""}`}>
      <p>{data.title}</p>
      <p>{data.audioDescription}</p>
      {!data.audioEmbed && (
        <AudioPlayer
          src={data.audioFile?.file?.url || data.audioUrl}
          layout={"horizontal-reverse"}
          showJumpControls={false}
          className={styles.audioPlayer}
        ></AudioPlayer>
      )}
      {data.audioEmbed && (
        <div className={styles.embedContainer}
          dangerouslySetInnerHTML={{ __html: data.audioEmbed.audioEmbed }}
        ></div>
      )}
    </section>
  )
}

export default AudioFilePlayer
