import React, { useState } from "react"
import * as styles from "./header.module.css"
import { Link, navigate } from "gatsby"
import Fade from "./fade"
import { IoSearch, IoTicket } from "react-icons/io5"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import Cart from "./cart"
import useStore from "../context/StoreContext"

const pageLabels = [
  {
    label: "On Air",
    labelClass: `${styles.onAirTagline} tgnHeavyItalic`,
    slug: "/",
  },
  {
    label: "ON VIEW:",
    labelTagline: "See What's Happening at The Kitchen",
    labelClass: `tgnHeavyItalic`,
    slug: "/on-view",
  },
  {
    label: "ON SCREEN:",
    labelTagline: "Stream Online Programming",
    labelClass: `tgnHeavy`,
    slug: "/on-screen",
  },
  {
    label: "ON FILE:",
    labelTagline: "Explore Our Archive",
    labelClass: `${styles.onFileHeader} tge`,
    searchPage: true,
    slug: "/on-file",
  },
  {
    label: "ON FILE:",
    labelTagline: "Explore Our Archive",
    labelClass: `${styles.onFileHeader} tge`,
    searchPage: false,
    slug: "/on-file",
  },
  {
    label: "ON MIND:",
    labelTagline: "Read Our Magazine",
    labelClass: `${styles.onMindHeader} ftpBold`,
    slug: "/on-mind",
  },
  {
    label: "Visit",
    labelTagline: "",
    labelClass: `tgn`,
    slug: "/visit",
  },
  {
    label: "About",
    labelTagline: "",
    labelClass: `tgn ${styles.aboutTagline}`,
    slug: "/about",
  },
  {
    label: "SHOP:",
    labelTagline: "Support the Future of the Avant Garde",
    labelClass: `tgn ${styles.shopTagline}`,
    slug: "/shop",
  },
]

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Header = ({
  isOpen,
  toggleMenu,
  location,
  title,
  tagline,
  isCartOpen,
  toggleCart,
}) => {
  let pageHeader = {}
  if (location.pathname === "/") {
    pageHeader = pageLabels[0]
  } else if (location.pathname.includes("/on-view/")) {
    pageHeader = pageLabels[1]
  } else if (location.pathname.includes("/on-screen/")) {
    pageHeader = pageLabels[2]
  } else if (location.pathname === "/on-file/search/") {
    pageHeader = pageLabels[3]
  } else if (location.pathname.includes("/on-file/")) {
    pageHeader = pageLabels[4]
  } else if (location.pathname.includes("/on-mind/")) {
    pageHeader = pageLabels[5]
  } else if (location.pathname.includes("/visit/")) {
    pageHeader = pageLabels[6]
  } else if (location.pathname.includes("/about/")) {
    pageHeader = pageLabels[7]
  } else if (location.pathname.includes("/shop/")) {
    pageHeader = pageLabels[8]
  } else {
    if (title) {
      pageHeader = {
        label: `${title}${tagline ? ":" : ""}`,
        labelTagline: tagline,
        labelClass: "tgn",
        slug: "",
      }
    } else {
      pageHeader = null
    }
  }

  const { cart } = useStore()
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <header className={styles.header}>
      <div className={`${styles.menu} tgn`}>
        <div className={styles.menuHeader}>
          <Link
            to="/"
            onClick={isOpen ? toggleMenu : () => {}}
            className={styles.homeButton}
          >
            THE KITCHEN
          </Link>
          <button
            id={styles.navIcon}
            className={`${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
            aria-label={`${isOpen ? "Close Menu" : "Open Menu"}`}
            name="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <nav
          className={`${styles.navPageLinks} ${
            isOpen ? styles.show : styles.hide
          }`}
        >
          <Link
            to="/on-view"
            className={`${styles.navPageSingleLink} tgnHeavyItalic`}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            ON VIEW<p>See What's Happening at The Kitchen</p>
          </Link>
          <Link
            to="/on-screen"
            className={`${styles.navPageSingleLink} tgnHeavy`}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            ON SCREEN<p>Stream Online Programming</p>
          </Link>
          <Link
            to="/on-file"
            className={`${styles.navPageSingleLink} tge`}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            ON FILE<p>Explore Our Archive</p>
          </Link>
          <Link
            to="/on-mind"
            className={`${styles.navPageSingleLink} ftpBold`}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            ON MIND<p>Read Our Magazine</p>
          </Link>
          <div className={styles.secondaryLinks}>
            <Link
              to="/calendar"
              className={styles.secondarySingleLink}
              onClick={isOpen ? toggleMenu : () => {}}
            >
              Calendar
            </Link>
            <Link
              to="/visit"
              className={styles.secondarySingleLink}
              onClick={isOpen ? toggleMenu : () => {}}
            >
              Visit
            </Link>
            <Link
              to="/about"
              className={styles.secondarySingleLink}
              onClick={isOpen ? toggleMenu : () => {}}
            >
              About
            </Link>
            <Link
              to="/support"
              className={styles.secondarySingleLink}
              onClick={isOpen ? toggleMenu : () => {}}
            >
              Support
            </Link>
            <Link
              to="/shop"
              className={styles.secondarySingleLink}
              onClick={isOpen ? toggleMenu : () => {}}
            >
              Shop
            </Link>
          </div>
          <form
            className={styles.searchLink}
            onSubmit={e => {
              e.preventDefault()
              navigate("/search", { state: { value: searchTerm } })
            }}
          >
            <input
              type="text"
              placeholder="Search"
              disabled={title === "Search"}
              onChange={e => setSearchTerm(e.target.value)}
            ></input>
            <button
              type="submit"
              disabled={title === "Search" || searchTerm.length < 1}
            >
              <IoSearch></IoSearch>
            </button>
          </form>
          <Link
            to="/tickets"
            className={styles.ticketsLink}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            Tickets <IoTicket></IoTicket>
          </Link>
        </nav>
      </div>
      {pageHeader && (
        <Fade>
          <div className={`${pageHeader.labelClass} ${styles.headerTagline}`}>
            <Link to={pageHeader.slug}>
              {pageHeader.label}{" "}
              <span className="tgn">{pageHeader.labelTagline}</span>
            </Link>
            {pageHeader.label === "ON MIND:" && (
              <p className={`${styles.headerDate} ftpItalic`}>
                {new Intl.DateTimeFormat("en-US", dateOptions).format(
                  new Date()
                )}
              </p>
            )}
            {pageHeader.label === "ON FILE:" && (
              <Link
                to="/on-file/search"
                className={`${styles.headerSearch} ${
                  pageHeader.searchPage ? styles.noDisplay : ""
                }`}
              >
                Search our Archive
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25.207 25.207"
                  className={styles.headerSearchIcon}
                >
                  <path
                    id="iconmonstr-search-thin"
                    d="M15.853,16.56a9.506,9.506,0,1,1,.707-.707L24,23.293,23.293,24l-7.44-7.44ZM9.5,1A8.5,8.5,0,1,1,1,9.5,8.5,8.5,0,0,1,9.5,1Z"
                    transform="translate(0.5 0.5)"
                    stroke="#fff"
                    strokeWidth="1"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            )}
            {pageHeader.label === "SHOP:" && (
              <article className={styles.shopLinks}>
                <Link to="/shop/artist-editions">Artist Editions</Link>
                <Link to="/shop/posters">Posters</Link>
                <Link to="/shop/music">Music</Link>
                <Link to="/shop/apparel">Apparel</Link>
                <Link to="/shop/books">Books</Link>
              </article>
            )}
          </div>
        </Fade>
      )}
      {pageHeader?.label === "SHOP:" && (
        <div className={styles.cartContainer}>
          <button className={styles.shopping} onClick={toggleCart}>
            <HiOutlineShoppingBag></HiOutlineShoppingBag>{" "}
            {cart.length > 0
              ? cart
                  .map(item => item.quantity)
                  .reduce((prev, next) => prev + next)
              : ""}
          </button>
          {isCartOpen && (
            <Fade>
              <Cart toggleCart={toggleCart}></Cart>
            </Fade>
          )}
        </div>
      )}
    </header>
  )
}

export default Header
