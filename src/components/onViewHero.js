import React from "react"
import * as styles from "./onViewHero.module.css"
import EventTile from "./eventTile"

const OnViewHero = ({ exhibits }) => {
  return (
    <section className={styles.heroContainer}>
      {exhibits.map(exhibit => (
        <article className={styles.fullScreen}>
          <EventTile event={exhibit.node}></EventTile>
        </article>
      ))}
    </section>
  )
}

export default OnViewHero
