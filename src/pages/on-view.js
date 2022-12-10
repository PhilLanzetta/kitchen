import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import EventTile from "../components/eventTile"

const OnView = ({ location, data }) => {
  const exhibits = data.allContentfulExhibition.nodes 
  return (
    <Layout location={location}>
      {exhibits.map(exhibit => <EventTile data={exhibit} key={exhibit.id}></EventTile>)}
    </Layout>
  )
}

export const Head = () => <Seo title="ON VIEW" />

export const query = graphql`
  query {
    allContentfulExhibition {
      nodes {
        id
        artist
        exhibitionTitle
        startDate
        endDate
        featuredImage {
          gatsbyImageData(cropFocus: CENTER, placeholder: BLURRED)
        }
      }
    }
  }
`

export default OnView
