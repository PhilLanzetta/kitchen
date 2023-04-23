import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import ReactPlayer from "react-player"
import Fade from "./fade"
import * as styles from "./onAir.module.css"
import Loader from "./loader"

const OnAir = () => {
  const liveData = useStaticQuery(graphql`
    {
      contentfulOnAir {
        isLive
        vimeoLink
      }
    }
  `)

  const { isLive, vimeoLink } = liveData.contentfulOnAir

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [video, setVideo] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

  const Token = "c930b08be056af14c4dde3467b751e80"

  const shuffleData = array => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  useEffect(() => {
    if (!isLive) {
      fetch("https://api.vimeo.com/users/4252371/albums/10302071/videos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
        .then(res => res.json())
        .then(result => {
          setData(shuffleData(result.data))
          setLoading(false)
        })
    } else {
      const timer = setTimeout(() => setLoading(false), "2000")
      return () => clearTimeout(timer)
    }
  }, [isLive])

  const handlePrevClick = () => {
    if (video !== 0) {
      setVideo(prev => prev - 1)
    } else {
      return
    }
  }

  const handleNextClick = () => {
    if (video !== data.length - 1) {
      setVideo(prev => prev + 1)
    } else {
      return
    }
  }

  return (
    <>
      <section>
        {isLive && (
          <p className={`${styles.desktopLiveTitle} tgnBoldItalic`}>
            <div className={styles.recording}></div>Live
          </p>
        )}
      </section>
      <section className={`${styles.mobileHeading} tgnHeavyItalic`}>
        On Air:{" "}
        {data && (
          <p className={`${styles.mobileVideoTitle} tgn`}>{data[video].name}</p>
        )}
        {isLive && (
          <p className={`${styles.mobileVideoTitle} tgnBoldItalic`}>
            <div className={styles.recording}></div>Live
          </p>
        )}
      </section>
      <section className={styles.videoPlayerWrapper}>
        {loading && <Loader></Loader>}
        {data && (
          <ReactPlayer
            url={data[video].link}
            className={styles.videoPlayer}
            playing={playing}
            muted={muted}
            volume={1}
            playsinline={true}
            width={"100%"}
            height={"100%"}
            onPause={() => setPlaying(false)}
            onEnded={handleNextClick}
          />
        )}
        {isLive && (
          <ReactPlayer
            url={vimeoLink}
            className={styles.videoPlayer}
            playing={playing}
            muted={muted}
            volume={1}
            playsinline={true}
            width={"100%"}
            height={"100%"}
            onPause={() => setPlaying(false)}
          />
        )}
      </section>
      <section className={styles.videoControlsContainer}>
        <article
          className={isLive ? styles.liveVideoControls : styles.videoControls}
        >
          {!isLive && (
            <button onClick={handlePrevClick}>
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
          )}
          {!isLive && !playing && (
            <button onClick={() => setPlaying(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 26.651 29.983"
              >
                <path
                  id="Polygon_4"
                  dataname="Polygon 4"
                  d="M14.991,0,29.983,26.651H0Z"
                  transform="translate(26.651) rotate(90)"
                  fill="#000"
                />
              </svg>
            </button>
          )}
          {!isLive && playing && (
            <button onClick={() => setPlaying(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="28"
                viewBox="0 0 22 30"
              >
                <g
                  id="Group_613"
                  dataname="Group 613"
                  transform="translate(-111 -1032)"
                >
                  <rect
                    id="Rectangle_744"
                    dataname="Rectangle 744"
                    width="8"
                    height="28"
                    transform="translate(111 1032)"
                  />
                  <rect
                    id="Rectangle_745"
                    dataname="Rectangle 745"
                    width="8"
                    height="28"
                    transform="translate(125 1032)"
                  />
                </g>
              </svg>
            </button>
          )}
          {!isLive && (
            <button onClick={handleNextClick}>
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
          )}
          {!muted && (
            <button onClick={() => setMuted(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.058"
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
          )}
          {muted && (
            <button onClick={() => setMuted(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.058"
                height="31.058"
                viewBox="0 0 31.058 31.058"
              >
                <g
                  id="Group_614"
                  dataname="Group 614"
                  transform="translate(-198.729 -1033.897)"
                >
                  <path
                    id="sound-svgrepo-com"
                    d="M4,11.425V22.133H9.354l10.708,6.425V5L9.354,11.425ZM17.921,8.782V24.775L9.947,19.991H6.142V13.567H9.947Zm4.987,14.054-1.514-1.514a6.434,6.434,0,0,0,0-9.087l1.514-1.514A8.579,8.579,0,0,1,22.907,22.837Zm3.028,3.028-1.514-1.514a10.721,10.721,0,0,0,0-15.145l1.514-1.514A12.865,12.865,0,0,1,25.936,25.865Z"
                    transform="translate(198.445 1032.719)"
                  />
                  <rect
                    id="Rectangle_746"
                    dataname="Rectangle 746"
                    width="3.294"
                    height="40.629"
                    transform="translate(198.729 1036.227) rotate(-45)"
                  />
                </g>
              </svg>
            </button>
          )}
        </article>
        <Fade>
          {data && (
            <article className={`tgn ${styles.desktopTitle}`}>
              {data[video].name}
            </article>
          )}
        </Fade>
      </section>
    </>
  )
}

export default OnAir
