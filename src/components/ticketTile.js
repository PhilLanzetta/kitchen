import React from "react"
import * as styles from "./ticketTile.module.css"

const TicketTile = ({ performance }) => {
  const {
    allDayEvent,
    hasAvailableTickets,
    performanceDate,
    performanceTime,
    productionName,
    productionId,
    performanceId,
    performanceSuperTitle,
    performanceSubTitle,
  } = performance
  return (
    <a
      className={styles.container}
      href={`https://ci.ovationtix.com/35572/production/${productionId}?performanceId=${performanceId}`}
      target="_blank"
      rel="noreferrer"
      disabled={!hasAvailableTickets}
    >
      <h2>{productionName}</h2>
      <h4>{performanceSuperTitle}</h4>
      <h5>{performanceSubTitle}</h5>
      <div className={styles.dateAndTime}>
        <h2>{performanceDate}</h2>
        <h2>{allDayEvent ? "All Day" : performanceTime}</h2>
      </div>
      {hasAvailableTickets ? (
        <div className={styles.cta}>Reserve Tickets</div>
      ) : (
        <div className={styles.cta}>Sold Out</div>
      )}
    </a>
  )
}

export default TicketTile
