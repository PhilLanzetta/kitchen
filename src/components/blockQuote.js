import React from 'react'
import * as styles from './blockQuote.module.css'

const BlockQuote = ({data}) => {
  return (
    <section className={styles.quoteContainer}><h2 className='tgnHeavy'>{data.quote.quote}</h2><p className={styles.author}>{data.author}</p></section>
  )
}

export default BlockQuote