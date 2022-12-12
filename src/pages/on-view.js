import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OnViewHero from "../components/onViewHero"

const OnView = ({ location, data }) => {
  const exhibits = data.allContentfulExhibition.edges
  return (
    <Layout location={location}>
      <OnViewHero exhibits={exhibits}></OnViewHero>
      <Link className="on-view-past-link" to="/">
        <p className="tgnHeavyItalic upper on-view-past">Past Events</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 171.707 107.317"
          className="on-view-arrow"
        >
          <path
            id="Path_15"
            dataname="Path 15"
            d="M156.561,61.236l-53.852,44.608,4.607,5.473,64.39-53.809L107.317,4,102.7,9.466l53.866,44.615H0v7.154Z"
            transform="translate(0 -4)"
            fillRule="evenodd"
          />
        </svg>
      </Link>
    </Layout>
  )
}

export const Head = () => <Seo title="ON VIEW" />

export const query = graphql`
  query {
    allContentfulExhibition(sort: { startDate: ASC }) {
      edges {
        node {
          id
          artist
          exhibitionTitle
          slug
          startDate
          endDate
          featuredImage {
            description
            gatsbyImageData(placeholder: BLURRED)
          }
          metadata {
            tags {
              name
              contentful_id
              id
            }
          }
        }
      }
    }
  }
`

export default OnView
