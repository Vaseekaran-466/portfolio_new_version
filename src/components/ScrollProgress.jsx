import { motion, useScroll, useSpring } from 'framer-motion'

const MotionDiv = motion.div

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 25,
    mass: 0.25,
  })

  return (
    <MotionDiv
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400"
      style={{ scaleX }}
    />
  )
}
