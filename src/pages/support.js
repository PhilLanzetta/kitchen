import React, { useEffect } from "react"
import fetch from "isomorphic-fetch"
import Layout from "../components/layout"

const Support = ({ location }) => {
  useEffect(() => {
    fetch("https://api.ovationtix.com/public/events/client(35572)")
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }, [])
  return (
    <Layout location={location} title="Support">
      <div>Support</div>
    </Layout>
  )
}

export default Support
