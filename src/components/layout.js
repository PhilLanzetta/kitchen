import React from "react"
import "./global.css"
import { useState } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, location }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} location={location} />
      <main>{children}</main>
      <Footer location={location} />
    </>
  )
}

export default Layout
