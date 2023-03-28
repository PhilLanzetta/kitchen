import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SupportTile from "../components/supportTile"

const Support = ({ location, data }) => {
  const { nodes } = data.allContentfulSupportTile
  return (
    <Layout location={location} title="Support">
      <section>
        {nodes.map(tile => (
          <SupportTile key={tile.id} data={tile}></SupportTile>
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
