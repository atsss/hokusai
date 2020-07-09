import React from 'react';
import style from './style.module.sass'
import { ScrollIcon } from '../../molecules/ScrollIcon'
import { Overlay } from '../../atoms/Overlay'
import { WhiteTxt } from '../../atoms/Txt'

interface Props {
  center?: boolean,
  children: React.ReactNode
}

const heroFactory = (role: string) => ({
  center = false,
  children
}: Props) => (
  <section className={[style.container, style[role]].join(' ')}>
    <Overlay>
      <div className={style.content}>
        <div className={center ? style.title : style.description}>
          {children}
        </div>
        <div className={style.text}>
          <WhiteTxt size='s'>scroll up</WhiteTxt>
        </div>
        <div className={style.icon}>
          <ScrollIcon/>
        </div>
      </div>
    </Overlay>
  </section>
);

export const PrintHero = heroFactory("print");
export const UkiyoeHero = heroFactory("ukiyoe");
