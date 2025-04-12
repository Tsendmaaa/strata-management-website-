'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function TypewriterEffect({ words }: { words: { text: string; className?: string }[] }) {
  const sentence = words.map((word) => word.text).join(' ')
  const [displayedText, setDisplayedText] = React.useState('')
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (index < sentence.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sentence[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [index, sentence])

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-4xl md:text-6xl font-bold text-white text-center"
    >
      {displayedText}
      <span className="blinking-cursor">|</span>
    </motion.h1>
  )
}
