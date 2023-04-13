import React, { useEffect, useState } from "react"
import Loader from "../components/loader"
import Layout from "../components/layout"
import * as styles from "../components/ticketsPage.module.css"

const Tickets = ({ location }) => {
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(true)
  const [production, setProduction] = useState(null)
  const [productionDate, setProductionDate] = useState(null)
  const [time, setTime] = useState(null)

  let eventOptions
  let dateOptions
  let timeOptions
  let url
  let hasTix = true

  if (events) {
    eventOptions = [
      ...new Map(
        events.performances.map(performance => [
          performance.productionId,
          performance,
        ])
      ).values(),
    ]
  }

  if (production) {
    const performanceDates = events.performances.filter(
      performance => performance.productionId.toString() === production
    )
    dateOptions = [
      ...new Map(
        performanceDates.map(performance => [
          performance.performanceDate,
          performance,
        ])
      ).values(),
    ]
  }

  if (productionDate) {
    timeOptions = events.performances
      .filter(performance => performance.productionId.toString() === production)
      .filter(performance => performance.performanceDate === productionDate)
  }

  if (production && productionDate && time) {
    url = `https://ci.ovationtix.com/35572/production/${production}?performanceId=${time}`
  }

  if (time) {
    hasTix = events.performances.filter(
      performance => performance.performanceId.toString() === time
    )[0].hasAvailableTickets
  }

  useEffect(() => {
    fetch("https://api.ovationtix.com/public/events/client(35572)")
      .then(res => res.json())
      .then(result => {
        setEvents(result)
        setLoading(false)
      })
  }, [])

  return (
    <Layout location={location} title="Tickets">
      <div className={styles.pageContainer}>
        <div className={styles.ticketsContainer}>
          {loading ? (
            <Loader></Loader>
          ) : (
            <div className={styles.formContainer}>
              <select
                className={styles.dropDown}
                value={production}
                onChange={e => setProduction(e.target.value)}
              >
                <option value="">Events</option>
                {eventOptions.map(performance => (
                  <option
                    value={performance.productionId}
                    key={performance.productionId}
                  >
                    {performance.productionName}
                  </option>
                ))}
              </select>
              <select
                className={styles.dropDown}
                disabled={!production}
                value={productionDate}
                onChange={e => setProductionDate(e.target.value)}
              >
                <option value="">Date</option>
                {dateOptions?.map(performance => (
                  <option
                    value={performance.performanceDate}
                    key={performance.performanceDate}
                  >
                    {performance.performanceDate}
                  </option>
                ))}
              </select>
              <select
                className={styles.dropDown}
                disabled={!productionDate}
                value={time}
                onChange={e => setTime(e.target.value)}
              >
                <option value="">Time</option>
                {timeOptions?.map(performance => (
                  <option
                    value={performance.performanceId}
                    key={performance.performanceId}
                  >
                    {performance.performanceTime}
                  </option>
                ))}
              </select>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={
                  url === undefined || !hasTix
                    ? styles.checkoutDisabled
                    : styles.checkout
                }
              >
                {hasTix
                  ? "Proceed to Ticket Selection and Checkout"
                  : "Sold Out"}
              </a>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Tickets
