import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { marked } from "marked"
import GoogleMap from "./googleMap"
import * as styles from "./planVisit.module.css"
import { HiArrowUpRight } from "react-icons/hi2"

const PlanVisit = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          addressText {
            addressText
          }
          addressCoordinates {
            lat
            lon
          }
          hours {
            hours
          }
        }
      }
    }
  `)

  const { addressText, addressCoordinates, hours } =
    data.allContentfulVisitPage.nodes[0]
  return (
    <>
      <div className={styles.addedPadding}></div>
      <section className={styles.visitContainer}>
        <article className={styles.addressHours}>
          <section className={styles.textContainer}>
            <h2>Plan Your Visit</h2>
            <article className={styles.addressHoursText}>
              <h3>Address</h3>
              <div className={styles.address}
                dangerouslySetInnerHTML={{
                  __html: marked.parse(addressText.addressText),
                }}
              ></div>
            </article>
            <article className={styles.addressHoursText}>
              <h3>Hours</h3>
              <div
                dangerouslySetInnerHTML={{ __html: marked.parse(hours.hours) }}
              ></div>
            </article>
            <article className={styles.linkContainer}>
              <Link to="/tickets" className={styles.link}>
                <p>Tickets</p>
                <HiArrowUpRight className={styles.outArrow}></HiArrowUpRight>
              </Link>
              <a
                href="https://goo.gl/maps/EhjKMsC7jHCZwiCf7"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <p>Open in Google Maps</p>
                <HiArrowUpRight className={styles.outArrow}></HiArrowUpRight>
              </a>
            </article>
          </section>
          <GoogleMap location={addressCoordinates}></GoogleMap>
          <article className={styles.mobileLinkContainer}>
            <Link to="/tickets" className={styles.link}>
              <p>Tickets</p>
              <HiArrowUpRight className={styles.outArrow}></HiArrowUpRight>
            </Link>
            <a
              href="https://goo.gl/maps/EhjKMsC7jHCZwiCf7"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              <p>Open in Google Maps</p>
              <HiArrowUpRight className={styles.outArrow}></HiArrowUpRight>
            </a>
          </article>
        </article>
      </section>
    </>
  )
}

export default PlanVisit
