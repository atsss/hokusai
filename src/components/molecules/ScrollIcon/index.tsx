import React, { useEffect } from 'react';
import { motion, useCycle } from "framer-motion"
import scrollIcon from '../../../images/scrollIcon.png'
import style from './style.module.sass'

export const ScrollIcon = () => {
  const [current, cycle] = useCycle("small", "big")

  useEffect(() => {
        const intervalId = setInterval(() => cycle(), 1000)
        return () => clearInterval(intervalId)
    });

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial={'small'}
      animate={current}
    >
      <img src={scrollIcon} className={style.image} alt='icon' />
    </motion.div>
  )
}

const variants = {
  small: {
    width: 40,
    height: 40,
    y: 75,
  },
  big: {
    width: 60,
    height: 60,
    y: 25,
  },
}
const transition = {
  type: "tween",
  damping: 300,
  duration: 1,
}
