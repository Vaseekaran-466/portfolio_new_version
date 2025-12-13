import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const MotionButton = motion.button

export default function BackToTop() {
  const reduceMotion = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <AnimatePresence>
      {show ? (
        <MotionButton
          type="button"
          aria-label="Back to top"
          onClick={onClick}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-slate-200 shadow-lg backdrop-blur hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/50"
        >
          <FiArrowUp className="text-lg" aria-hidden />
        </MotionButton>
      ) : null}
    </AnimatePresence>
  )
}
