'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BasicMotion() {
  const [show, setShow] = useState(true)

  return (
    <>
      <motion.button
        transition={{ delay: 0.4 }}
        onClick={() => setShow(!show)}
        className="mb-5 py-2 px-5 rounded-xl bg-blue-500 leading-7 tracking-wider text-lg font-medium"
        layout
      >
        show & hide
      </motion.button>

      <AnimatePresence mode="popLayout">
        {show && (
          <motion.div
            initial={{ rotate: '0deg', scale: 0, y: 0 }}
            animate={{ rotate: '180deg', scale: 1, y: [0, 100, -100, -100, 0] }}
            // animate={{ rotate: '180deg', scale: 1, y: [0, 100, -100, 0] }}
            exit={{ rotate: '0deg', scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            // transition={{
            //   duration: 1,
            //   ease: 'backInOut',
            //   times: [0, 0.5, 0.5, 1],
            // }}
            className="w-[150px] h-[150px] bg-white rounded-xl"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
