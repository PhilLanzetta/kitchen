import * as React from "react"
import * as styles from "./header.module.css"
import { Link } from "gatsby"
import Fade from "./fade"
import search from "./assets/search.svg"
import tix from "./assets/tix.svg"

const pageLabels = [
  { label: "On Air", labelClass: `${styles.onAirHeader} tgnHeavyItalic` },
  {
    label: "ON VIEW:",
    labelTagline: "See What's Happening at The Kitchen",
    labelClass: `${styles.onViewHeader} tgnHeavyItalic`,
  },
  {
    label: "ON SCREEN:",
    labelTagline: "Watch and Listen",
    labelClass: `${styles.onScreenHeader} tgnHeavy`,
  },
  {
    label: "ON FILE:",
    labelTagline: "Explore Our Archive",
    labelClass: `${styles.onFileHeader} tge`,
  },
  {
    label: "ON MIND:",
    labelTagline: "Read Our Magazine",
    labelClass: `${styles.onMindHeader} ftpBold`,
  },
]

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Header = ({ isOpen, toggleMenu, location }) => {
  let pageHeader
  switch (location.pathname) {
    case "/":
      pageHeader = pageLabels[0]
      break
    case "/on-view/":
      pageHeader = pageLabels[1]
      break
    case "/on-screen/":
      pageHeader = pageLabels[2]
      break
    case "/on-file/":
      pageHeader = pageLabels[3]
      break
    case "/on-mind/":
      pageHeader = pageLabels[4]
      break
    default:
      pageHeader = null
  }

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
            ON SCREEN<p>Watch and Listen</p>
          </Link>
          <Link
            to="/on-file"
            className={`${styles.navPageSingleLink} tge`}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            ON FILE<p>Explore our Archive</p>
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
          <Link
            to="/search"
            className={styles.searchLink}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            Search <img src={search} alt="search icon"></img>
          </Link>
          <Link
            to="/tickets"
            className={styles.ticketsLink}
            onClick={isOpen ? toggleMenu : () => {}}
          >
            Tickets <img src={tix} alt="tickets icon"></img>
          </Link>
        </nav>
      </div>
      {pageHeader && (
        <Fade>
          <div className={`${pageHeader.labelClass} ${styles.headerTagline}`}>
            <div>
              {pageHeader.label}{" "}
              <span className="tgn">{pageHeader.labelTagline}</span>
            </div>
            {pageHeader.label === "ON MIND:" && (
              <p className={`${styles.headerDate} ftpItalic`}>
                {new Intl.DateTimeFormat("en-US", dateOptions).format(
                  new Date()
                )}
              </p>
            )}
            {pageHeader.label === "ON FILE:" && (
              <button className={styles.headerSearch}>
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
              </button>
            )}
          </div>
        </Fade>
      )}
    </header>
  )
}

export default Header
