import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import GoogleMap from "./googleMap"
import * as styles from "./planVisit.module.css"
import { HiArrowUpRight } from "react-icons/hi2"

const PlanVisit = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          addressText {
            raw
          }
          addressCoordinates {
            lat
            lon
          }
          hours {
            raw
          }
        }
      }
    }
  `)

  const renderOptions = {
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

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
              {renderRichText(addressText, renderOptions)}
            </article>
            <article className={styles.addressHoursText}>
              <h3>Hours</h3>
              {renderRichText(hours, renderOptions)}
            </article>
            <article className={styles.linkContainer}>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <p>Tickets</p>
                <HiArrowUpRight className={styles.outArrow}></HiArrowUpRight>
              </a>
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
