import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./onFileHero.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"

const OnFileHero = () => {
  const data = useStaticQuery(graphql`
    query {
      pageHero: contentfulOnFilePageHero {
        danceImage {
          id
          gatsbyImageData
          description
        }
        exhibitionsImage {
          id
          gatsbyImageData
          description
        }
        filmvideoImage {
          id
          gatsbyImageData
          description
        }
        literatureImage {
          id
          gatsbyImageData
          description
        }
        musicImage {
          id
          gatsbyImageData
          description
        }
        performanceImage {
          id
          gatsbyImageData
          description
        }
        residencyImage {
          id
          gatsbyImageData
          description
        }
        talksImage {
          id
          gatsbyImageData
          description
        }
      }
    }
  `)

  const [heroImage, setHeroImage] = useState({})

  return (
    <section className={styles.heroContainer}>
      <ul>
        <li
          className={`tgnHeavy ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.exhibitionsImage)}
          role="presentation"
        >
          Exhibitions,
        </li>
        <li
          className={`tgnHeavyItalic ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.talksImage)}
          role="presentation"
        >
          Talks,
        </li>
        <li
          className={`tgn ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.performanceImage)}
          role="presentation"
        >
          Performance,
        </li>
        <li
          className={`ftpItalic ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.danceImage)}
          role="presentation"
        >
          Dance,
        </li>
        <li
          className={`tgnHeavy ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.musicImage)}
          role="presentation"
        >
          Music,
        </li>
        <li
          className={`tgnHeavyItalic ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.filmvideoImage)}
          role="presentation"
        >
          Film/Video,
        </li>
        <li
          className={`tgn ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.literatureImage)}
          role="presentation"
        >
          Literature,
        </li>
        <li
          className={`tgnItalic ${styles.hoverUnderline}`}
          onMouseEnter={() => setHeroImage(data.pageHero.residencyImage)}
          role="presentation"
        >
          Residency
        </li>
      </ul>
      <AnimatePresence>
        {heroImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={heroImage.id}
          >
            <GatsbyImage
              image={heroImage.gatsbyImageData}
              alt={heroImage.description}
              className={styles.heroImage}
            ></GatsbyImage>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OnFileHero
