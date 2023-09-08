import React, { useState } from "react"
import Layout from "../components/layout"
import { Calendar as CalendarPicker } from "react-calendar"
import * as styles from "../components/calendarPage.module.css"
import { graphql, Link } from "gatsby"
import { HiArrowUpRight } from "react-icons/hi2"
import CalendarTile from "../components/calendarTile"
import Seo from "../components/seo"

const Calendar = ({ location, data }) => {
  const [value, onChange] = useState(new Date())
  function GetDates(startDate, daysToAdd) {
    var aryDates = []

    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate() + i // Will increase month if over range
      )
      aryDates.push(currentDate)
    }

    return aryDates
  }

  const dateRange = GetDates(value, 5)

  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  const getDatesBetween = (startDate, endDate) => {
    const dates = []
    const formattedStart = new Date(startDate)
    const formattedEnd =
      endDate !== undefined
        ? new Date(endDate)
        : new Date(
            formattedStart.getFullYear(),
            formattedStart.getMonth(),
            formattedStart.getDate() + 30
          )

    console.log(formattedEnd)

    // Strip hours minutes seconds etc.
    let currentDate = new Date(
      formattedStart.getFullYear(),
      formattedStart.getMonth(),
      formattedStart.getDate()
    )

    while (currentDate <= formattedEnd) {
      dates.push(currentDate)

      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1 // Will increase month if over range
      )
    }

    return dates
  }

  return (
    <Layout
      location={location}
      title="Calendar"
      tagline="Discover the past, present, and future of The Kitchen"
    >
      <section className={styles.pageContainer}>
        <section className={styles.header}>
          <h2 className={styles.eventHeader}>Programs & Exhibitions</h2>
          <h2 className={styles.calendarHeader}>Calendar</h2>
        </section>
        <section className={styles.infoContainer}>
          <article className={styles.eventsContainer}>
            {dateRange.map((day, index) => {
              let hasEvent = false
              return (
                <article key={index}>
                  <h3 className={styles.dateLabel}>
                    {new Intl.DateTimeFormat("en-US", dateOptions).format(
                      new Date(day)
                    )}
                  </h3>
                  {data.allContentfulOnView.nodes.map(node => {
                    const eventDateRange = getDatesBetween(
                      node.startDate,
                      node.endDate
                    )
                    if (
                      eventDateRange.find(
                        item => item.getTime() === day.getTime()
                      )
                    ) {
                      hasEvent = true
                      return (
                        <CalendarTile
                          key={node.id}
                          data={node}
                          onView
                        ></CalendarTile>
                      )
                    } else {
                      return null
                    }
                  })}
                  {data.allContentfulOnScreenVideo.nodes.map(node => {
                    const eventDateRange = getDatesBetween(
                      node.startDate,
                      node.endDate
                    )
                    if (
                      eventDateRange.find(
                        item => item.getTime() === day.getTime()
                      )
                    ) {
                      hasEvent = true
                      return (
                        <CalendarTile key={node.id} data={node}></CalendarTile>
                      )
                    } else {
                      return null
                    }
                  })}
                  {!hasEvent && (
                    <p className={styles.noEvents}>No Programs Scheduled</p>
                  )}
                </article>
              )
            })}
          </article>
          <article className={styles.calendarContainer}>
            <CalendarPicker
              onChange={onChange}
              value={value}
              calendarType="US"
              formatShortWeekday={(locale, date) =>
                ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
              }
            ></CalendarPicker>
            <Link to="/visit/" className={styles.visitLink}>
              Plan Your Visit{" "}
              <HiArrowUpRight className={styles.arrow}></HiArrowUpRight>
            </Link>
            <Link to="/on-view" className={styles.visitLink}>
              See What's On View{" "}
              <HiArrowUpRight className={styles.arrow}></HiArrowUpRight>
            </Link>
          </article>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulOnScreenVideo(sort: { startDate: ASC }) {
      nodes {
        id
        links {
          ... on ContentfulUrlLink {
            id
            linkText
            linkIcon
            linkUrl
          }
        }
        featuredImage {
          image {
            description
            gatsbyImageData
          }
          creditText
        }
        startDate
        videoTitle
        artist
        slug
      }
    }
    allContentfulOnView(sort: { endDate: ASC }) {
      nodes {
        artist
        endDate
        exhibitionHours
        exhibitionTitle
        featuredImage {
          creditText
          id
          image {
            description
            gatsbyImageData
          }
        }
        links {
          ... on ContentfulUrlLink {
            id
            linkIcon
            linkText
            linkUrl
          }
        }
        slug
        startDate
      }
    }
  }
`
export const Head = () => <Seo title="CALENDAR" />

export default Calendar
