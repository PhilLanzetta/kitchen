import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Fade = ({children}) => {
  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
    </AnimatePresence>
  )
}

export default Fade