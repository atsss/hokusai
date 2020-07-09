import React from 'react';
import style from './style.module.sass'

interface Props {
  children: React.ReactNode[]
}

export const HorizontalScroll: React.FC<Props> = ({ children }) => {
  return (
    <ul className={style.gallery}>
      {children!.map((child: React.ReactNode, index: number) => (
        <li key={index} className={style.list}>{child}</li>
      ))}
    </ul>
  )
}
