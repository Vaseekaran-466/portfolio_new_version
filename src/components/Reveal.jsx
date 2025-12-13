import { motion, useReducedMotion } from 'framer-motion'

const MotionDiv = motion.div

export default function Reveal({ children, delay = 0, className = '', once = true }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </MotionDiv>
  )
}
