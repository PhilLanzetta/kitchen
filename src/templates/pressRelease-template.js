import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/pressRelease.module.css"
import { HiArrowDown } from "react-icons/hi2"
import Seo from "../components/seo"
import { marked } from "marked"

const PressRelease = ({ data, location }) => {
  const {
    title,
    subtitle,
    introHeading,
    introBody,
    images,
    pressRelease,
    additionalText,
  } = data.contentfulPressRelease
  return (
    <Layout location={location} title="Press">
      <section className={styles.pageContainer}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <section className={styles.content}>
          <article className={styles.download}>
            <a
              href={pressRelease?.file?.url}
              download
              className={styles.downloadPress}
            >
              Download Press Release <HiArrowDown></HiArrowDown>
            </a>
          </article>
          <article className={styles.infoContainer}>
            <div
              className={styles.intro}
              dangerouslySetInnerHTML={{
                __html: marked.parse(introHeading?.introHeading),
              }}
            ></div>
            <div
              className={styles.intro}
              dangerouslySetInnerHTML={{
                __html: introBody ? marked.parse(introBody?.introBody) : "",
              }}
            ></div>
            <section className={styles.imageGrid}>
              {images?.map((image, index) => (
                <article className={styles.imageContainer} key={index}>
                  <figure>
                    <GatsbyImage
                      image={image?.image?.gatsbyImageData}
                      alt={image?.image?.description}
                      className={styles.image}
                    ></GatsbyImage>
                    <figcaption>{image?.creditText}</figcaption>
                  </figure>
                  <a
                    href={image?.image?.file?.url}
                    className={styles.downloadImage}
                    download
                  >
                    Download <HiArrowDown></HiArrowDown>
                  </a>
                </article>
              ))}
            </section>
            <div
              className={styles.intro}
              dangerouslySetInnerHTML={{
                __html: additionalText
                  ? marked.parse(additionalText?.additionalText)
                  : "",
              }}
            ></div>
          </article>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePressRelease($slug: String) {
    contentfulPressRelease(slug: { eq: $slug }) {
      id
      additionalText {
        additionalText
      }
      introBody {
        introBody
      }
      introHeading {
        introHeading
      }
      title
      subtitle
      pressRelease {
        file {
          url
        }
      }
    }
  }
`
export const Head = () => <Seo title="PRESS" />

export default PressRelease
