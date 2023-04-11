import React, { useEffect, useState } from "react"
import Loader from "../components/loader"
import Layout from "../components/layout"
import TicketTile from "../components/ticketTile"
import * as styles from '../components/ticketsPage.module.css'

const Tickets = ({ location }) => {
  const [events, setEvents] = useState()
  const [loading, setLoading] = useState(true)

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
        {loading ? (
          <Loader></Loader>
        ) : (
          events.performances.map(performance => (
            <TicketTile performance={performance}></TicketTile>
          ))
        )}
      </div>
    </Layout>
  )
}

export default Tickets
