import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./team.module.css"

const Team = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        teamLeadership {
          name
          title
          email
          id
        }
        staff {
          name
          id
          email
          title
        }
        consultants {
          name
          id
          email
          title
        }
      }
    }
  `)

  const { teamLeadership, staff, consultants } = data.contentfulAboutPage
  return (
    <section className={styles.teamContainer}>
      <h2>Team</h2>
      <article className={styles.teamListing}>
        <section className={styles.leaders}>
          <h3>Leadership</h3>
          <section className={styles.leadersList}>
            {teamLeadership.map(person => (
              <article key={person.id}>
                <p className={styles.name}>{person.name}</p>
                <p>{person.title}</p>
              </article>
            ))}
          </section>
        </section>
        <section className={styles.staff}>
          <h3>Staff</h3>
          <section className={styles.staffList}>
            {staff.map(person => (
              <article className={styles.staffMember} key={person.id}>
                <p className={styles.name}>{person.name}</p>
                <p>{person.title}</p>
              </article>
            ))}
            <h3>Consultants</h3>
            {consultants.map(person => (
              <article className={styles.staffMember} key={person.id}>
                <p className={styles.name}>{person.name}</p>
                <p>{person.title}</p>
              </article>
            ))}
          </section>
        </section>
      </article>
    </section>
  )
}

export default Team
