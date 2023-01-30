import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from './gettingHere.module.css'
const GettingHere = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulVisitPage {
        nodes {
          subwayDirections {
            subwayDirections
          }
          bikeDirections {
            bikeDirections
          }
          busDirections {
            busDirections
          }
          carDirections {
            carDirections
          }
        }
      }
    }
  `)
  const { subwayDirections, bikeDirections, carDirections, busDirections } =
    data.allContentfulVisitPage.nodes[0]
  return (
    <section className={styles.container}>
      <h2>Getting Here</h2>
      <article className={styles.directionsContainer}>
        <section className={styles.directions}>
          <h3>Subway</h3>
          <p>{subwayDirections.subwayDirections}</p>
        </section>
        <section className={styles.directions}>
          <h3>Bus</h3>
          <p>{busDirections.busDirections}</p>
        </section>
        <section className={styles.directions}>
          <h3>Bike</h3>
          <p>{bikeDirections.bikeDirections}</p>
        </section>
        <section className={styles.directions}>
          <h3>Car</h3>
          <p>{carDirections.carDirections}</p>
        </section>
      </article>
    </section>
  )
}

export default GettingHere
