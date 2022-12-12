import React from "react"
import ModuleCarousel from "./moduleCarousel"

const ModuleContent = ({ data }) => {
  return (
    <section>
      {data.map(item => {
        if (item.images?.length > 2) {
          return <ModuleCarousel data={item.images} key={item.id}></ModuleCarousel>
        } else if (item.images) {
          return <article>I am a two column image</article>
        } else if (item.quote) {
          return <article>I am a quote</article>
        } else if (item.audioFile) {
          return <article>I am an audio file</article>
        } else {
          return <article>Unknown type</article>
        }
      })}
    </section>
  )
}

export default ModuleContent
