import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from './board.module.css'

const Board = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAboutPage {
        boardLeadership {
          id
          name
          title
        }
        boardEmeritus {
          id
          name
          title
        }
        boardMembers {
          id
          name
        }
      }
    }
  `)
  const { boardLeadership, boardEmeritus, boardMembers } =
    data.contentfulAboutPage

  return (
    <section className={styles.boardContainer}>
      <h2>Board of Directors</h2>
      <section className={styles.listContainer}>
        <article className={styles.leaderContainer}>
          {boardLeadership.map(person => (
            <article key={person.id}>
              <p>{person.name}</p>
              <p>{person.title}</p>
            </article>
          ))}
        </article>
        <section className={styles.rightSide}>
          <article className={styles.memberContainer}>
            {boardMembers.map(person => (
              <article key={person.id}>
                <p>{person.name}</p>
              </article>
            ))}
          </article>
          <article className={styles.emeritusContainer}>
            {boardEmeritus.map(person => (
              <article key={person.id}>
                <p>{person.name}</p>
                <p>{person.title}</p>
              </article>
            ))}
          </article>
        </section>
      </section>
    </section>
  )
}

export default Board
