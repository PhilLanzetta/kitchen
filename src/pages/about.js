import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TextBox from "../components/textBox"
import Contact from "../components/contact"
import Team from "../components/team"
import Timeline from "../components/timeline"
import Board from "../components/board"
import VisitLink from "../components/visitLink"
import Seo from "../components/seo"

const About = ({ location, data }) => {
  const { mission, values, history, landAcknowledgment, timeline, contact } =
    data.contentfulAboutPage
  return (
    <Layout location={location}>
      <section className="about-page">
        <TextBox text={mission.mission}></TextBox>
        <TextBox text={values.values} values></TextBox>
        <TextBox text={history.history}></TextBox>
        <Timeline data={timeline}></Timeline>
        <TextBox text={landAcknowledgment.landAcknowledgment}></TextBox>
        <Team></Team>
        <Board></Board>
        <Contact text={contact.contact}></Contact>
        <div style={{ display: "flex" }}>
          <VisitLink
            text="Jobs + Internships"
            slug="/jobs-internships/"
          ></VisitLink>
          <VisitLink text="Visit" slug="/visit/"></VisitLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage {
      mission {
        mission
      }
      values {
        values
      }
      history {
        history
      }
      landAcknowledgment {
        landAcknowledgment
      }
      contact {
        contact
      }
      timeline {
        id
        image {
          creditText
          image {
            description
            gatsbyImageData
          }
        }
        text {
          text
        }
        year
      }
    }
  }
`

export const Head = () => <Seo title="ABOUT" />

export default About
