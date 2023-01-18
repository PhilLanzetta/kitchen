import React from "react"
import ModuleCarousel from "./moduleCarousel"
import TwoColumnImg from "./twoColumnImg"
import ThreeColumnText from "./threeColumnText"
import TwoColumnText from "./twoColumnText"
import InTextImg from "./inTextImg"
import BlockQuote from "./blockQuote"
import FullWidthVideo from "./fullWidthVideo"
import AudioFilePlayer from "./audioFilePlayer"
import CreditText from "./creditText"

const ModuleContent = ({ data, font }) => {
  return (
    <section className={`${font ? font : ""}`}>
      {data.map(item => {
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
          return <BlockQuote key={item.quoteId} data={item} font={font}></BlockQuote>
        } else if (item.audioId) {
          return (
            <AudioFilePlayer key={item.audioId} data={item}></AudioFilePlayer>
          )
        } else if (item.threeColId) {
          return (
            <ThreeColumnText
              data={item.text}
              key={item.threeColId}
            ></ThreeColumnText>
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
        } else {
          return <article>Unknown type</article>
        }
      })}
    </section>
  )
}

export default ModuleContent
