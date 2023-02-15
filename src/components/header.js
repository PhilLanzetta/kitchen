import * as React from "react"
import * as styles from "./header.module.css"
import { Link } from "gatsby"
import Fade from "./fade"
import { IoSearch, IoTicket } from "react-icons/io5"

const pageLabels = [
  { label: "On Air", labelClass: `${styles.onAirTagline} tgnHeavyItalic` },
  {
    label: "ON VIEW:",
    labelTagline: "See What's Happening at The Kitchen",
    labelClass: `tgnHeavyItalic`,
  },
  {
    label: "ON SCREEN:",
    labelTagline: "Watch and Listen",
    labelClass: `tgnHeavy`,
  },
  {
    label: "ON FILE:",
    labelTagline: "Explore Our Archive",
    labelClass: `${styles.onFileHeader} tge`,
    home: true,
  },
  {
    label: "ON FILE:",
    labelTagline: "Explore Our Archive",
    labelClass: `${styles.onFileHeader} tge`,
    home: false,
  },
  {
    label: "ON MIND:",
    labelTagline: "Read Our Magazine",
    labelClass: `${styles.onMindHeader} ftpBold`,
  },
  {
    label: "Visit",
    labelTagline: "",
    labelClass: `tgn`,
  },
  {
    label: "About:",
    labelTagline:
      "Mission & Values, History & Timeline, Land Acknowledgement, Team, Board,  Contact",
    labelClass: `tgn ${styles.aboutTagline}`,
  },
  {
    label: "SHOP:",
    labelTagline: "Support the Future of the Avant Garde",
    labelClass: `tgn ${styles.shopTagline}`,
  },
]

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

const Header = ({ isOpen, toggleMenu, location, title, tagline }) => {
  let pageHeader = {}
  if (location.pathname === "/") {
    pageHeader = pageLabels[0]
  } else if (location.pathname.includes("/on-view/")) {
    pageHeader = pageLabels[1]
  } else if (location.pathname.includes("/on-screen/")) {
    pageHeader = pageLabels[2]
  } else if (location.pathname === "/on-file/") {
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
      }
    } else {
      pageHeader = null
    }
  }

  console.log(pageHeader)
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
            Search <IoSearch></IoSearch>
          </Link>
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
              <button
                className={`${styles.headerSearch} ${
                  pageHeader.home ? "" : styles.noDisplay
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
              </button>
            )}
          </div>
        </Fade>
      )}
    </header>
  )
}

export default Header
