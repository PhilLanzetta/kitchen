import React from "react"
import ModuleCarousel from "./moduleCarousel"
import TwoColumnImg from "./twoColumnImg"
import * as styles from "./flexContent.module.css"
import FourColumnImg from "./fourColumnImg"
import HeadlineText from "./headlineText"
import FlexLinkBox from "./flexLinkBox"
import ColumnText from "./columnText"
import ImageText from "./imageText"

const FlexContent = ({ content }) => {
  return (
    <section className={styles.pageContainer}>
      {content.map(item => {
        if (item.carouselId) {
          return (
            <ModuleCarousel
              data={item.images}
              key={item.carouselId}
            ></ModuleCarousel>
          )
        } else if (item.twoColumnId) {
          return (
            <TwoColumnImg
              data={item.images}
              key={item.twoColumnId}
            ></TwoColumnImg>
          )
        } else if (item.fourColumnId) {
          return (
            <FourColumnImg
              images={item.images}
              key={item.fourColumnId}
            ></FourColumnImg>
          )
        } else if (item.headlineTextId) {
          return (
            <HeadlineText data={item} key={item.headlineTextId}></HeadlineText>
          )
        } else if (item.linkBoxId) {
          return <FlexLinkBox key={item.linkBoxId} data={item}></FlexLinkBox>
        } else if (item.columnTextId) {
          return <ColumnText key={item.columnTextId} data={item}></ColumnText>
        } else if (item.imageTextId) {
          return <ImageText key={item.imageTextId} data={item}></ImageText>
        } else {
          return null
        }
      })}
    </section>
  )
}

export default FlexContent
