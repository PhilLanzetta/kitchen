import React from "react"
import "./global.css"
import { useState } from "react"
import Header from "./header"
import Footer from "./footer"
import Fade from "./fade"

const Layout = ({ children, location, title, tagline }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        location={location}
        title={title}
        tagline={tagline}
        toggleCart={toggleCart}
        isCartOpen={isCartOpen}
      />
      <Fade>
        <main>{children}</main>
      </Fade>
      <Footer location={location} />
    </>
  )
}

export default Layout
