import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import EmailForm from "./emailForm"
import * as styles from "./footer.module.css"

const Footer = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulOnFileArchivePost(limit: 1000) {
        nodes {
          slug
        }
      }
    }
  `)

  const shuffleData = array => {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ]
    }

    return array
  }

  const randomArchive = shuffleData(data.allContentfulOnFileArchivePost.nodes)

  return (
    <>
      {location.pathname !== "/" && (
        <footer className="tgn">
          <section className={`${styles.socialLinkContainer} tgnHeavy`}>
            <a
              href="https://www.facebook.com/thekitchenNYC/"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/thekitchen_nyc/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/thekitchen_nyc"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://vimeo.com/thekitchen"
              rel="noreferrer"
              target="_blank"
            >
              Vimeo
            </a>
          </section>
          <section className={styles.footerTagline}>
            New York CITY’s <span className="ftpItalic">center for</span>{" "}
            <span className="tgnHeavy">experimental art</span> &{" "}
            <span className="tgnHeavyItalic">
              the <span style={{ whiteSpace: "nowrap" }}>AVANT-GARDE</span>
            </span>{" "}
            SINCE 1971
          </section>
          <section className={styles.footerMenu}>
            <article className={styles.hoursLocationDesktop}>
              <section>
                Temporary Satellite Address:
                <br />
                163B Bank Street, 4th Floor Loft
                <br /> New York, NY 10014
              </section>
              <section>
                Office Hours:<br></br> Monday-Friday, 10a-6p <br />
                <br />
                Program Hours Vary.{" "}
                <Link to="/calendar/" className={styles.exploreLink}>
                  Explore upcoming programs
                </Link>{" "}
                for more information.
              </section>
            </article>
            <article className={styles.footerPageLinks}>
              <Link to="/contact">Contact</Link>
              <Link to="/jobs-internships">Jobs & Internships</Link>
              <Link to="/press">Press Room</Link>
              <Link to="/visit#accessibility">Accessibility</Link>
              <Link to="/support">Support</Link>
              <Link to="/donate">Donate</Link>
              <a
                href="https://thenext50.thekitchen.org/"
                target="_blank"
                rel="noreferrer"
              >
                The Next 50
              </a>
              <Link to="/faqs">FAQs</Link>
              <Link to="/artist-submissions">Artist Submissions</Link>
              <Link to="/space-rental">Space Rental</Link>
              <Link to="/digital-guide">Digital Guide</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/shipping-and-returns">Shipping & Returns</Link>
            </article>
            <article className={styles.footerFormContainer}>
              JOIN OUR COMMUNITY
              <EmailForm></EmailForm>
            </article>
            <article className={styles.hoursLocationMobile}>
              <section>
                Temporary Satellite Address:
                <br />
                163B Bank Street, 4th Floor Loft
                <br /> New York, NY 10014
              </section>
              <section>
                Office Hours:<br></br> Monday-Friday, 10a-6p <br />
                <br />
                Program Hours Vary.{" "}
                <Link to="/calendar/" className={styles.exploreLink}>
                  Explore upcoming programs
                </Link>{" "}
                for more information.
              </section>
            </article>
            <article className={styles.footerIconContainer}>
              <Link to={`/on-file/${randomArchive[0].slug}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.978 228.09"
                >
                  <path
                    id="Path_2"
                    dataname="Path 2"
                    d="M-535.881,213.539c3.158-7.995,6.364-16.107,9.567-24.221,1.039-2.633,2.1-5.258,3.089-7.91a1.691,1.691,0,0,1,1.56-1.28q12.32-1.4,24.635-2.858c7.379-.87,14.755-1.774,22.134-2.649q9.962-1.18,19.93-2.326c5.168-.6,10.335-1.205,15.508-1.761a3,3,0,0,1,1.668.344c1.576.87,3.1,1.84,4.779,2.856A36.068,36.068,0,0,1-431.6,170.3a2.216,2.216,0,0,1,1.341-1.084q13.814-2.242,27.651-4.339a2.473,2.473,0,0,1,1.621.452c4.508,3.2,8.982,6.456,13.467,9.693.444.32.9.63,1.459,1.025,2-2.517,3.925-4.944,5.849-7.376,1.615-2.041,3.172-4.131,4.865-6.105a3.817,3.817,0,0,1,2.12-1.268c6.021-.86,12.059-1.606,18.091-2.386,4.19-.542,8.383-1.06,12.568-1.645a2.857,2.857,0,0,1,2.393.579q22.231,17.293,44.506,34.529c.362.28.714.572,1.112.89-5.979,7.128-11.888,14.176-17.8,21.221q-22.313,26.6-44.6,53.213a4.174,4.174,0,0,0-.877,2.36q-.884,23.964-1.663,47.93-.769,23.271-1.5,46.543c-.021.648-.082,1.294-.108,1.69-3.51.472-6.92.9-10.32,1.395-6.569.956-13.129,1.978-19.705,2.886a3.1,3.1,0,0,1-1.969-.717q-10.512-7.833-20.968-15.738c-.364-.274-.741-.527-1.262-.9-.307.694-.573,1.27-.819,1.854-2.4,5.7-4.826,11.379-7.165,17.1a2.631,2.631,0,0,1-2.512,1.939c-4.1.472-8.163,1.263-12.241,1.931-4.306.7-8.605,1.462-12.925,2.064a3.368,3.368,0,0,1-2.2-.792q-11.993-9.338-23.919-18.762c-.4-.314-.811-.612-1.392-1.05l-9.185,24.194c-2.729.365-5.294.7-7.857,1.052-6.439.886-12.873,1.82-19.323,2.617a3.679,3.679,0,0,1-2.331-.893q-17.611-13.578-35.166-27.231c-3.121-2.42-6.235-4.851-9.369-7.254a19.335,19.335,0,0,0-1.8-1.095c3.033-7.635,6.109-15.393,9.2-23.148q10.115-25.408,20.237-50.813,8.751-21.989,17.518-43.972c.518-1.291.535-2-.692-2.954-5.691-4.417-11.268-8.98-16.9-13.469A11.3,11.3,0,0,0-535.881,213.539Zm131.851-46.825a8.315,8.315,0,0,0-1.043.005c-6.784,1.072-13.54,2.4-20.361,3.127-3.554.377-5.215,1.691-6.515,5.089-7.038,18.4-14.42,36.661-21.666,54.977q-20.221,51.112-40.424,102.232c-1,2.536-1.992,5.076-3.072,7.829,1.294-.13,2.347-.23,3.4-.343,6.788-.726,13.573-1.486,20.367-2.15a1.958,1.958,0,0,0,1.876-1.45q9.578-23.707,19.218-47.39a13.824,13.824,0,0,1,1.766-3.6c4.707-5.757,9.521-11.426,14.3-17.12.2-.243.463-.439.893-.841-1.155,22.149-2.294,43.978-3.443,66l29.818-3.584c.045-.76.1-1.445.123-2.132q.294-7.94.578-15.879.718-20.269,1.43-40.538.641-18.529,1.246-37.058a4.637,4.637,0,0,1,1.148-3.01q27.731-33.147,55.4-66.342c1.443-1.73,2.88-3.465,4.427-5.325a13.042,13.042,0,0,0-1.468.007c-8.929,1.172-17.858,2.343-26.779,3.568a2.678,2.678,0,0,0-1.565.926q-24.979,31.527-49.906,63.1-2.745,3.473-5.5,6.94l-.267-.151ZM-561.378,347.433c.771-.035,1.273-.036,1.771-.084,7.261-.7,14.52-1.419,21.785-2.07a1.707,1.707,0,0,0,1.7-1.24q9.18-22.564,18.43-45.1,13.565-33.124,27.137-66.245c3.484-8.51,6.949-17.028,10.464-25.525a1.942,1.942,0,0,1,1.173-1.1q12.5-1.623,25.025-3.085a2.275,2.275,0,0,0,2.166-1.711c2.666-7.137,5.4-14.249,8.1-21.371.949-2.5,1.887-5,2.93-7.769-2.022.25-3.762.477-5.506.678-7.567.873-15.136,1.72-22.7,2.611-9.04,1.065-18.074,2.178-27.113,3.244-8.21.968-16.427,1.881-24.631,2.893a2.177,2.177,0,0,0-1.424,1.181c-3.427,8.526-6.792,17.078-10.163,25.626-.461,1.169-.883,2.353-1.392,3.714l27.315-3.062Zm157.815-115.169c.4.361.689.655,1.011.906q21.445,16.706,42.888,33.416c.718.56,1.142.647,1.8-.143,5.161-6.221,10.37-12.4,15.565-18.6q19.752-23.541,39.505-47.081c2.019-2.406,4.027-4.821,6.1-7.3l-45.224-35.044Zm-85.052,147.423c.182-.4.265-.555.329-.722,2.685-7.076,5.349-14.161,8.077-21.22a1.585,1.585,0,0,0-.591-2.193c-5.365-4.155-10.679-8.376-16.022-12.559-.752-.589-1.572-1.092-2.422-1.677a2.618,2.618,0,0,1,.108-.4Q-485.12,305.5-471.1,270.08q8.307-20.987,16.652-41.961a2.1,2.1,0,0,0-.894-3.023c-4.971-3.511-9.847-7.156-14.763-10.746-2.841-2.075-5.69-4.141-8.728-6.351L-535.164,345.62ZM-403.917,234c-.064.762-.12,1.21-.137,1.659q-.219,5.71-.425,11.421-.854,24.165-1.7,48.33c-.385,11.05-.745,22.1-1.156,33.15a2.215,2.215,0,0,0,1.019,2.075q20.2,15.344,40.371,30.736c1.057.806,2.12,1.6,3.406,2.573.054-.813.106-1.349.123-1.885.213-6.732.406-13.464.633-20.2q.662-19.636,1.349-39.272c.36-10.724.662-21.45,1.075-32.173a2.928,2.928,0,0,0-1.3-2.775q-16.312-12.628-32.566-25.332C-396.7,239.606-400.182,236.9-403.917,234Zm-33.36,37.539c-3.644,4.352-7.2,8.579-10.73,12.83a11.727,11.727,0,0,0-2.007,2.808c-6.719,16.416-13.369,32.861-20.072,49.285a1.512,1.512,0,0,0,.567,2.172q21.778,16.148,43.507,32.36c.35.26.731.479,1.184.773,2.7-6.416,5.352-12.655,7.922-18.926.135-.329-.267-1.094-.634-1.378-3.269-2.531-6.588-5-9.891-7.485q-5.737-4.315-11.473-8.631c-.676-.51-1.494-.681-1.418-2.007q1.613-28.24,3.036-56.489C-437.2,275.156-437.276,273.449-437.276,271.541Zm-.257,62.907c.616.489.964.779,1.325,1.05q21.443,16.133,42.861,32.3a5.047,5.047,0,0,0,4.233.97c6.649-1.031,13.311-1.975,19.968-2.96,1.693-.251,3.383-.533,5.341-.843-.447-.378-.612-.531-.791-.668q-21.5-16.4-43.031-32.763a2.955,2.955,0,0,0-1.91-.424c-2.678.257-5.346.631-8.018.951C-424.094,332.847-430.632,333.625-437.534,334.449Zm10.961,38.123c-.36-.328-.514-.494-.693-.627q-21.91-16.324-43.84-32.621a2.58,2.58,0,0,0-1.652-.4c-4.9.48-9.79,1.018-14.684,1.541-2.839.3-5.677.613-8.866.956.513.444.771.688,1.048.906q21.431,16.839,42.884,33.65a2.511,2.511,0,0,0,1.726.461c6.058-.912,12.1-1.887,18.153-2.857C-430.591,373.275-428.69,372.933-426.573,372.572Zm-63.734,7.875c-.365-.349-.512-.524-.691-.654Q-513.2,363.541-535.43,347.32a3.075,3.075,0,0,0-1.9-.506c-5.877.467-11.748.995-17.62,1.526-1.76.159-3.514.385-5.511.606.481.4.722.61.975.807q21.688,16.817,43.394,33.61a2.244,2.244,0,0,0,1.5.355c3.592-.435,7.176-.932,10.761-1.419C-499.427,381.7-495.025,381.093-490.307,380.447ZM-425,224.762l.306.168L-387,177.246l-15.241-11Zm-21.416-17.1c-1.455-.909-2.841-1.675-4.11-2.6a4.1,4.1,0,0,0-3.151-.673c-5.891.748-11.786,1.469-17.679,2.2-1.812.226-3.622.464-5.831.748l23.971,17.509Zm.56-1.434,3.454-8.729q4.178-10.56,8.334-21.128c.169-.432.233-1.274,0-1.432-1.548-1.068-3.187-2-4.915-3.053l-11.879,31.223Zm-62.773,4.545-24.341,2.751,17.643,14.11C-513.057,221.93-510.876,216.44-508.625,210.77Z"
                    transform="translate(563.539 -157.218)"
                    fill="#fff"
                  />
                </svg>
              </Link>
            </article>
          </section>
          <section className={styles.footerCredit}>
            <a
              href="https://www.pacificpacific.pub"
              target="_blank"
              rel="noreferrer"
            >
              Website Designed and Developed by Pacific
            </a>
          </section>
        </footer>
      )}
    </>
  )
}

export default Footer
