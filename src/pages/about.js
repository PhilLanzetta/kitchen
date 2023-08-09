import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TextBox from "../components/textBox"
import VisitContact from "../components/visitContact"
import Team from "../components/team"
import Timeline from "../components/timeline"
import Board from "../components/board"
import VisitLink from "../components/visitLink"
import Seo from "../components/seo"

const About = ({ location, data }) => {
  const { mission, values, history, landAcknowledgment, timeline } =
    data.contentfulAboutPage
  return (
    <Layout location={location}>
      <section className="about-page" style={{ scrollBehavior: "smooth" }}>
        <div id="mission" className="about-anchor"></div>
        <TextBox text={mission.mission}></TextBox>
        <div id="values" className="about-anchor"></div>
        <TextBox text={values.values} values></TextBox>
        <div id="history" className="about-anchor"></div>
        <TextBox text={history.history}></TextBox>
        <div id="timeline" className="about-anchor"></div>
        <Timeline data={timeline}></Timeline>
        <div id="site" className="about-anchor"></div>
        <TextBox text={landAcknowledgment.landAcknowledgment}></TextBox>
        <div id="team" className="about-anchor"></div>
        <Team></Team>
        <div id="board" className="about-anchor"></div>
        <Board></Board>
        <div id="contact" className="about-anchor"></div>
        <VisitContact></VisitContact>
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
