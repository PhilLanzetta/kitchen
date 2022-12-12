import React from "react"
import * as styles from "./linkButton.module.css"
import tix from "./assets/tix.svg"

const LinkButton = ({ link, type }) => {
  if (type === "ticket") {
    return (
      <a href={link} className={styles.linkButton}>
        <p>Tickets</p>
        <img src={tix} alt="ticket icon"></img>
      </a>
    )
  } else if (type === "download") {
    return (
      <a href={link} className={styles.linkButton}>
        <p>Download</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.489 25.039">
          <g id="download-svgrepo-com" transform="translate(0.5 0.5)">
            <path
              id="Arrow_Download"
              d="M76.289,15.272a.761.761,0,0,0-1.069,0l-6.2,6.136V.749a.756.756,0,0,0-1.513,0V21.407l-6.2-6.135a.761.761,0,0,0-1.069,0,.744.744,0,0,0,0,1.059l7.488,7.413a.769.769,0,0,0,1.07,0l7.488-7.413a.744.744,0,0,0,0-1.06Z"
              transform="translate(-60.022)"
              stroke="#000"
              strokeWidth="1"
            />
          </g>
        </svg>
      </a>
    )
  } else {
    return <button className={styles.linkButton}></button>
  }
}

export default LinkButton
