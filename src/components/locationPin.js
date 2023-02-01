import React from "react"
import { HiLocationMarker } from "react-icons/hi"
import * as styles from "./locationPin.module.css"

const LocationPin = () => {
  return (
    <aside>
      <HiLocationMarker className={styles.markerIcon}></HiLocationMarker>
      <div className={styles.text}>
        <p className={styles.heading}>The Kitchen</p>
        <p className={styles.tagline}>Enduring, progressive performance venue</p>
      </div>
    </aside>
  )
}

export default LocationPin
