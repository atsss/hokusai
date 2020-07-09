import React, { useEffect } from 'react';
import { Frame } from "framer"
import { useCycle } from "framer-motion"
import scrollIcon from '../../../images/scrollIcon.png'
import style from './style.module.sass'

export const ScrollIcon = () => {
  const [current, cycle] = useCycle("small", "big")

  useEffect(() => {
        const intervalId = setInterval(() => cycle(), 1000)
        return () => clearInterval(intervalId)
    });

  return (
    <Frame
      variants={variants}
      transition={transition}
      initial={'small'}
      animate={current}
      radius={'100%'}
    >
      <img src={scrollIcon} className={style.image} alt='icon' />
    </Frame>
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
