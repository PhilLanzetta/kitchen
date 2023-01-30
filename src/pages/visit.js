import React from "react"
import Accessibility from "../components/accessibility"
import GettingHere from "../components/gettingHere"
import Layout from "../components/layout"
import PlanVisit from "../components/planVisit"
import VisitContact from "../components/visitContact"
import VisitLink from "../components/visitLink"

const Visit = ({ location }) => {
  return (
    <Layout location={location}>
      <PlanVisit></PlanVisit>
      <GettingHere></GettingHere>
      <Accessibility></Accessibility>
      <VisitLink text="Calendar" slug="/calendar"></VisitLink>
      <VisitLink text="Tickets" slug="/tickets"></VisitLink>
      <VisitContact></VisitContact>
    </Layout>
  )
}

export default Visit
