import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TextBox from "../components/textBox"
import VisitContact from "../components/visitContact"
import Team from "../components/team"
import Timeline from "../components/timeline"
import Board from "../components/board"
import VisitLink from "../components/visitLink"

const About = ({ location, data }) => {
  const { missionValues, history, landAcknowledgment } =
    data.contentfulAboutPage
  return (
    <Layout location={location}>
      <section className="about-page">
        <TextBox
          heading="Mission & Values"
          text={missionValues.missionValues}
        ></TextBox>
        <TextBox heading="History" text={history.history}></TextBox>
        <Timeline></Timeline>
        <TextBox
          heading="Land Acknowledgment"
          text={landAcknowledgment.landAcknowledgment}
        ></TextBox>
        <Team></Team>
        <Board></Board>
        <VisitContact></VisitContact>
        <VisitLink text="Jobs + Internships" slug="/jobs/"></VisitLink>
        <VisitLink text="Visit" slug="/visit/"></VisitLink>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage {
      missionValues {
        missionValues
      }
      history {
        history
      }
      landAcknowledgment {
        landAcknowledgment
      }
    }
  }
`

export default About
