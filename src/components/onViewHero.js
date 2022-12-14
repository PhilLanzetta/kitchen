import React from "react"
import * as styles from "./onViewHero.module.css"
import EventTile from "./eventTile"

const OnViewHero = ({ exhibits, width }) => {
  return (
    <section className={styles.heroContainer}>
      {exhibits.map(exhibit => {
        return (
          <article key={exhibit.node.id} className={`${styles[width]}`}>
            <EventTile event={exhibit.node} size={width}></EventTile>
          </article>
        )
      })}
    </section>
  )
}

export default OnViewHero
