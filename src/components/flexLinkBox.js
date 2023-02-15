import React from "react"
import { Link } from "gatsby"
import { HiArrowUpRight } from "react-icons/hi2"

const FlexLinkBox = ({ data }) => {
  return (
    <>
      {data.internalLink ? (
        <Link to={data.linkUrl}>
          {data.linkText} <HiArrowUpRight></HiArrowUpRight>
        </Link>
      ) : (
        <a href={data.linkUrl} target="_blank" rel="noreferrer">
          {data.linkText} <HiArrowUpRight></HiArrowUpRight>
        </a>
      )}
    </>
  )
}

export default FlexLinkBox
