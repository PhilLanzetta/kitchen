import React, { useState } from "react"
import ReactPlayer from "react-player"
import * as styles from "./onAir.module.css"

const OnAir = () => {
  const [playing, setPlaying] = useState(false)
  return (
    <>
      <section className={styles.videoPlayerWrapper}>
        <ReactPlayer
          url="https://player.vimeo.com/video/411109621"
          className={styles.videoPlayer}
          playing={playing}
          width={"100%"}
          height={"100%"}
        />
      </section>
      <section className={styles.videoControls}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.196"
            height="16.979"
            viewBox="0 0 24.196 16.979"
          >
            <path
              id="fast-forward-svgrepo-com"
              d="M.18,16.643,11.642,8.578a.424.424,0,0,1,.669.347v7.546L23.527,8.583a.425.425,0,0,1,.669.348V25.05a.425.425,0,0,1-.229.377.433.433,0,0,1-.2.047.427.427,0,0,1-.244-.077L12.31,17.509v7.546a.424.424,0,0,1-.669.347L.18,17.337a.424.424,0,0,1,0-.694Z"
              transform="translate(0 -8.5)"
              fill="#000"
            />
          </svg>
        </button>
        <button onClick={() => setPlaying(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.651"
            height="29.983"
            viewBox="0 0 26.651 29.983"
          >
            <path
              id="Polygon_4"
              dataName="Polygon 4"
              d="M14.991,0,29.983,26.651H0Z"
              transform="translate(26.651) rotate(90)"
              fill="#000"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.196"
            height="16.979"
            viewBox="0 0 24.196 16.979"
          >
            <path
              id="fast-forward-svgrepo-com"
              d="M24.015,16.643,12.554,8.578a.424.424,0,0,0-.669.347v7.546L.669,8.583A.425.425,0,0,0,0,8.93V25.05a.425.425,0,0,0,.229.377.433.433,0,0,0,.2.047A.427.427,0,0,0,.669,25.4l11.217-7.888v7.546a.424.424,0,0,0,.669.347l11.461-8.065a.424.424,0,0,0,0-.694Z"
              transform="translate(0 -8.5)"
              fill="#000"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.693"
            height="23.558"
            viewBox="0 0 25.693 23.558"
          >
            <path
              id="sound-svgrepo-com"
              d="M4,11.425V22.133H9.354l10.708,6.425V5L9.354,11.425ZM17.921,8.782V24.775L9.947,19.991H6.142V13.567H9.947Zm4.987,14.054-1.514-1.514a6.434,6.434,0,0,0,0-9.087l1.514-1.514A8.579,8.579,0,0,1,22.907,22.837Zm3.028,3.028-1.514-1.514a10.721,10.721,0,0,0,0-15.145l1.514-1.514A12.865,12.865,0,0,1,25.936,25.865Z"
              transform="translate(-4 -5)"
              fill="#000"
            />
          </svg>
        </button>
      </section>
    </>
  )
}

export default OnAir
