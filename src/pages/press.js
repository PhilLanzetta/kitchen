import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { HiArrowDown } from "react-icons/hi2"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/pressPage.module.css"
import Seo from "../components/seo"

const Press = ({ location, data }) => {
  const { nodes } = data.allContentfulPressRelease
  const currentYear = new Date().getFullYear()
  const foundingYear = 1971
  const options = []
  for (let i = currentYear; i >= foundingYear; i--) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    )
  }

  const [year, setYear] = useState(currentYear.toString())

  const entries = nodes.map(node => {
    if (node.year.toString() === year) {
      return (
        <div className={styles.releasePreview}>
          <Link to={node.slug}>
            <GatsbyImage
              image={node.featuredImage.image.gatsbyImageData}
              alt={node.featuredImage.image.description}
              className={styles.previewImage}
            ></GatsbyImage>
            <div className={styles.previewHeading}>
              <h2>{node.title}</h2>
              <h3>{node.subtitle}</h3>
            </div>
          </Link>
          <a
            href={node.pressRelease.file.url}
            download
            className={styles.download}
          >
            Download Press Release <HiArrowDown></HiArrowDown>
          </a>
        </div>
      )
    } else {
      return 0
    }
  })

  return (
    <Layout location={location} title="Press">
      <section className={styles.pageContainer}>
        <h1 className={styles.pageTitle}>Press Releases</h1>
        <section className={styles.content}>
          <article className={styles.pageIntro}>
            <select
              className={styles.yearInput}
              value={year}
              onChange={e => setYear(e.target.value)}
            >
              {options}
            </select>
            <p>Welcome to The Kitchen’s online Press Office.</p>
            <p>
              The images on this site may be used only for non-commercial
              editorial press purposes in conjunction with The Kitchen’s current
              exhibitions, programs, building, and announcements.
            </p>
            <p>
              Images must be reproduced with notice of attribution, and the
              party reproducing the images may not distort or otherwise modify
              the images.
            </p>
            <p>
              Any other use of these images requires the The Kitchen’s express
              written permission.{" "}
            </p>
            <p>
              For more information email:<br></br> Angelique Rosales Salgado at{" "}
              <a href="mailto:angelique@thekitchen.org">
                angelique@thekitchen.org
              </a>
            </p>
          </article>
          <article className={styles.releaseContainer}>
            {entries.some(value => typeof value === "object") ? (
              entries.filter(value => typeof value === "object")
            ) : (
              <p>No press release for selected year.</p>
            )}
          </article>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPressRelease {
      nodes {
        featuredImage {
          image {
            gatsbyImageData
            description
          }
        }
        subtitle
        title
        year
        slug
        pressRelease {
          file {
            url
          }
        }
      }
    }
  }
`
export const Head = () => <Seo title="PRESS" />

export default Press
