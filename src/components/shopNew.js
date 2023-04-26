import React, { useState, useRef } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import useWindowSize from "../utils/useWindowSize"
import * as styles from "./shopNew.module.css"
import Slider from "react-slick"

const ShopNew = () => {
  const data = useStaticQuery(graphql`
    query {
      allShopifyProduct(
        filter: { collections: { elemMatch: { title: { eq: "New" } } } }
      ) {
        nodes {
          title
          handle
          id
          featuredImage {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          metafield(key: "artist", namespace: "custom") {
            value
          }
          priceRangeV2 {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  `)

  const products = data.allShopifyProduct.nodes
  const [mousePos, setMousePos] = useState(null)
  const [position, setPosition] = useState({})
  const [hover, setHover] = useState(true)
  const { width } = useWindowSize()

  const sliderRef = useRef()

  const handleMouseMove = event => {
    setMousePos(event.clientX)
    setPosition({ top: event.clientY, left: event.clientX - 32 })
  }

  const handleClick = () => {
    if (width > 920 && mousePos > width / 2 + 32) {
      sliderRef.current.slickNext()
    } else if (width > 920 && mousePos < width / 2 + 32) {
      sliderRef.current.slickPrev()
    } else {
      return
    }
  }

  const settings = {
    slidesToShow: 1,
    infinite: true,
    dots: false,
    useTransform: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          dots: true,
          appendDots: dots => (
            <div>
              <ul className={styles.dotsContainer}> {dots} </ul>
            </div>
          ),
          customPaging: i => <div className={styles.dots}></div>,
        },
      },
    ],
  }

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="presentation"
        className={styles.carouselContainer}
      >
        <Slider ref={sliderRef} {...settings}>
          {products.map(item => (
            <article key={item.id} className={styles.productContainer}>
              <GatsbyImage
                image={
                  item.featuredImage?.localFile?.childImageSharp.gatsbyImageData
                }
                className={styles.image}
              ></GatsbyImage>
              <section className={styles.tileOverlay}>
                <Link to={`/shop/${item.handle}`} className={styles.eventLink}>
                  <article className={styles.productInfo}>
                    <p className={`tgnBold upper`}>
                      <span className={styles.newTag}>New!</span>
                    </p>
                    <p className={`tgn upper`}>
                      <span>{item.metafield?.value}</span>
                    </p>
                    <p className={`tgnHeavyItalic upper`}>
                      <span>{item.title}</span>
                    </p>
                    <p className={`tgnHeavyItalic`}>
                      <span>{`$${item.priceRangeV2?.minVariantPrice.amount}`}</span>
                    </p>
                  </article>
                </Link>
              </section>
            </article>
          ))}
        </Slider>
        {hover && width > 920 && mousePos < width / 2 + 32 && (
          <div className={styles.cursor} style={position}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 191.309 119.567"
            >
              <path
                id="Path_22"
                dataname="Path 22"
                d="M16.875,67.769l60,49.7-5.133,6.1L0,63.616,71.741,4l5.141,6.09L16.867,59.8H191.309v7.971Z"
                transform="translate(0 -4)"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        )}
        {hover && width > 920 && mousePos > width / 2 + 32 && (
          <div className={styles.cursor} style={position}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 191.309 119.568"
            >
              <path
                id="Path_14"
                data-name="Path 14"
                d="M174.434,67.77l-60,49.7,5.133,6.1,71.741-59.951L119.568,4l-5.141,6.09L174.441,59.8H0V67.77Z"
                transform="translate(0 -4)"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShopNew
