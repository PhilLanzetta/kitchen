import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./board.module.css"
import { marked } from "marked"

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
        advisoryBoardDescription {
          advisoryBoardDescription
        }
        advisoryBoard {
          id
          name
          title
        }
      }
    }
  `)
  const {
    boardLeadership,
    boardEmeritus,
    boardMembers,
    advisoryBoard,
    advisoryBoardDescription,
  } = data.contentfulAboutPage

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
        <section className={styles.advisoryBoard}>
          <div
          className={styles.advisoryHeading}
            dangerouslySetInnerHTML={{
              __html: marked.parse(
                advisoryBoardDescription.advisoryBoardDescription
              ),
            }}
          ></div>
          {advisoryBoard.map(person => (
            <article key={person.id}>
              <p>{person.name}</p>
            </article>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Board
