import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./gettingHere.module.css"
import { marked } from "marked"

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
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: marked.parse(subwayDirections.subwayDirections),
            }}
          ></div>
        </section>
        <section className={styles.directions}>
          <h3>Bus</h3>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: marked.parse(busDirections.busDirections),
            }}
          ></div>
        </section>
        <section className={styles.directions}>
          <h3>Bike</h3>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: marked.parse(bikeDirections.bikeDirections),
            }}
          ></div>
        </section>
        <section className={styles.directions}>
          <h3>Car</h3>
          <div
            style={{ display: "inline" }}
            dangerouslySetInnerHTML={{
              __html: marked.parse(carDirections.carDirections),
            }}
          ></div>
        </section>
      </article>
    </section>
  )
}

export default GettingHere
