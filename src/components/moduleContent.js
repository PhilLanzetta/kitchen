import React from "react"
import ModuleCarousel from "./moduleCarousel"
import TwoColumnImg from "./twoColumnImg"
import TwoColumnText from "./twoColumnText"
import InTextImg from "./inTextImg"
import BlockQuote from "./blockQuote"
import FullWidthVideo from "./fullWidthVideo"
import AudioFilePlayer from "./audioFilePlayer"
import CreditText from "./creditText"
import SingleColText from "./singleColText"

const ModuleContent = ({ data, font, dark }) => {
  return (
    <section className={`${font ? font : ""}`}>
      {data?.map(item => {
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
        } else if (item.quoteId) {
          return (
            <BlockQuote key={item.quoteId} data={item} font={font}></BlockQuote>
          )
        } else if (item.audioId) {
          return (
            <AudioFilePlayer
              key={item.audioId}
              data={item}
              dark={dark}
            ></AudioFilePlayer>
          )
        } else if (item.twoColTxtId) {
          return (
            <TwoColumnText
              data={item.text}
              key={item.twoColTxtId}
            ></TwoColumnText>
          )
        } else if (item.inTextImgId) {
          return (
            <InTextImg key={item.inTextImgId} data={item.image}></InTextImg>
          )
        } else if (item.fullVideoId) {
          return (
            <FullWidthVideo key={item.fullVideoId} data={item}></FullWidthVideo>
          )
        } else if (item.creditId) {
          return <CreditText key={item.creditId} data={item.text}></CreditText>
        } else if (item.inTextVidId) {
          return (
            <FullWidthVideo
              key={item.inTextVidId}
              data={item}
              inText
            ></FullWidthVideo>
          )
        } else if (item.singleId) {
          return (
            <SingleColText key={item.singleId} data={item.text}></SingleColText>
          )
        } else {
          return <article>Unknown type</article>
        }
      })}
    </section>
  )
}

export default ModuleContent
