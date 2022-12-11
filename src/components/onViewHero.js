import React from 'react'
import * as styles from './onViewHero.module.css'
import EventTile from './eventTile'

const OnViewHero = ({exhibits}) => {
  return (
    <section className={styles.heroContainer}>
      <article className={styles.fullScreen}>
        <EventTile event={exhibits[0].node}></EventTile>
      </article>
      <article className={styles.fullScreen}>
        <EventTile event={exhibits[1].node}></EventTile>
      </article>
      <article className={styles.halfScreen}>
        <EventTile event={exhibits[2].node}></EventTile>
      </article>
      <article className={styles.halfScreen}>
        <EventTile event={exhibits[3].node}></EventTile>
      </article>
    </section>
  )
}

export default OnViewHero