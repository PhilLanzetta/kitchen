import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
        <Link
          to="/on-file/search"
          state={{ category: "Exhibitions" }}
          className={`tgnHeavy ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.exhibitionsImage)}
        >
          Exhibitions,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Talks" }}
          className={`tgnHeavyItalic ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.talksImage)}
        >
          Talks,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Performance" }}
          className={`tgn ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.performanceImage)}
        >
          Performance,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Dance" }}
          className={`ftpItalic ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.danceImage)}
        >
          Dance,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Music" }}
          className={`tgnHeavy ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.musicImage)}
        >
          Music,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Video" }}
          className={`tgnHeavyItalic ${styles.hoverUnderline} ${styles.category} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.filmvideoImage)}
        >
          Film/Video,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Literature" }}
          className={`tgn ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.literatureImage)}
        >
          Literature,
        </Link>
        <Link
          to="/on-file/search"
          state={{ category: "Residency" }}
          className={`tgnItalic ${styles.hoverUnderline} ${styles.category}`}
          onMouseEnter={() => setHeroImage(data.pageHero.residencyImage)}
        >
          Residency
        </Link>
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
