import React, { useState } from 'react';
import { motion, useViewportScroll } from "framer-motion";

interface Props {
  breakpoint: number,
  children: React.ReactNode
}

export const FadeIn: React.FC<Props> = ({ breakpoint, children }) => {
  const [isVisible, setVisible] = useState(false)
  const { scrollYProgress } = useViewportScroll()

  scrollYProgress.onChange(current => {
    if(current > breakpoint) { setVisible(true) }
  })

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial={isVisible ? "visible" : "hidden"}
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

const variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
}
const transition = {
  type: "spring",
  damping: 300,
  duration: 1,
}
