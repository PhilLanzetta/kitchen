import React, { useState } from "react"
import Layout from "../components/layout"
import { Calendar as CalendarPicker } from "react-calendar"
import * as styles from "../components/calendarPage.module.css"

const Calendar = ({ location }) => {
  const [value, onChange] = useState(new Date())
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
          <article className={styles.eventsContainer}></article>
          <article className={styles.calendarContainer}>
            <CalendarPicker
              onChange={onChange}
              value={value}
              calendarType="US"
              formatShortWeekday={(locale, date) =>
                ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
              }
            ></CalendarPicker>
          </article>
        </section>
      </section>
    </Layout>
  )
}

export default Calendar
