import React from "react"
import Layout from "../components/layout"
import ShopFeatured from "../components/shopFeatured"
import ShopNew from "../components/shopNew"
import Seo from "../components/seo"

const Shop = ({ location }) => {
  return (
    <Layout location={location}>
      <ShopNew></ShopNew>
      <ShopFeatured></ShopFeatured>
    </Layout>
  )
}

export const Head = () => <Seo title="SHOP" />

export default Shop
