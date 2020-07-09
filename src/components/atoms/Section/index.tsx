import React from 'react';
import style from './style.module.sass'

interface Props {
  children: React.ReactNode,
  background?: boolean
}

export const Section: React.FC<Props> = ({ children, background = false }) => (
  <section className={background ? [style.container, style.background].join(' ') : style.container}>
    <div className={style.content}>
      {children}
    </div>
  </section>
);
