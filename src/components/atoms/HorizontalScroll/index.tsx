import React, { useRef } from 'react';
import { useElementScroll, useTransform } from "framer-motion";
import style from './style.module.sass'

interface Props {
  children: React.ReactNode[]
  onChange?: (i: number) => void
}

export const HorizontalScroll: React.FC<Props> = ({ children, onChange = (i: number) => console.log(i) }) => {
  const ref = useRef(null)
  const { scrollXProgress } = useElementScroll(ref)
  const index = useTransform(scrollXProgress, [0, 1], [0, children.length - 1])
  let prevIndex = 0

  index.onChange(current => {
    const newIndex = Math.round(current)

    if(newIndex !== prevIndex) { onChange(newIndex) }

    prevIndex = newIndex
  })


  return (
    <ul ref={ref} className={style.gallery}>
      {children!.map((child: React.ReactNode, index: number) => (
        <li key={index} className={style.list}>
          {child}
        </li>
      ))}
    </ul>
  )
}
