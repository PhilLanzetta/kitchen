import CombinedProvider from "./src/context/CombinedProvider"

export const wrapRootElement = CombinedProvider

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
