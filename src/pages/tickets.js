import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as styles from "../components/ticketsPage.module.css"
import { marked } from "marked"
import FlexLinkBox from "../components/flexLinkBox"
import Seo from "../components/seo"

const Tickets = ({ location, data }) => {
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(true)
  const [production, setProduction] = useState(
    location.state?.production || null
  )
  const [productionDate, setProductionDate] = useState(null)
  const [time, setTime] = useState(null)

  const { informationTiles, links } = data.allContentfulTicketsPage.nodes[0]

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

  if (production && events) {
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
    fetch("https://api.ovationtix.com/public/events/client(35572)", {
      headers: {
        clientId: "35572",
        origin: "https://thekitchen.org/tickets/",
      },
    })
      .then(res => res.json())
      .then(result => {
        setEvents(result)
        setLoading(false)
      })
  }, [])

  return (
    <Layout location={location} title="Tickets">
      <div className={styles.pageContainer}>
        <h2 className={styles.headline}>THE KITCHEN BOX OFFICE</h2>
        <div className={styles.ticketsContainer}>
          <div className={styles.formContainer}>
            <select
              className={styles.dropDown}
              value={production}
              onChange={e => setProduction(e.target.value)}
              disabled={loading}
            >
              <option value="">Events</option>
              {eventOptions?.map(performance => (
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
              {hasTix ? "Proceed to Ticket Selection and Checkout" : "Sold Out"}
            </a>
          </div>
        </div>
        <div className={styles.informationContainer}>
          {informationTiles.map(tile => (
            <article key={tile.id} className={styles.tile}>
              <h3 className={styles.infoTitle}>{tile.title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: marked.parse(tile.information.information),
                }}
              ></p>
            </article>
          ))}
        </div>
        <div className={styles.linkContainer}>
          {links.map(link => (
            <FlexLinkBox data={link}></FlexLinkBox>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulTicketsPage {
      nodes {
        id
        informationTiles {
          id
          information {
            information
          }
          title
        }
        links {
          id
          internalLink
          linkText
          linkUrl
          size
        }
      }
    }
  }
`
export const Head = () => <Seo title="TICKETS" />

export default Tickets
