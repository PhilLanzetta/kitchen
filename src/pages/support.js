import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SupportTile from "../components/supportTile"
import * as styles from "../components/supportTile.module.css"

const Support = ({ location, data }) => {
  const { nodes } = data.allContentfulSupportTile
  return (
    <Layout location={location} title="Support">
      <section className={styles.pageContainer}>
        {nodes.map((tile, index) => (
          <SupportTile
            headingClass={`heading${index.toString()}`}
            key={tile.id}
            data={tile}
          ></SupportTile>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulSupportTile(sort: { updatedAt: ASC }) {
      nodes {
        id
        title
        descriptionText {
          descriptionText
        }
        links {
          linkIcon
          linkText
          linkUrl
        }
      }
    }
  }
`

export default Support
