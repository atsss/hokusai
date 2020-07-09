import React from 'react';
import style from './style.module.sass'
import { ScrollIcon } from '../../molecules/ScrollIcon'
import { Overlay } from '../../atoms/Overlay'
import { WhiteTxt } from '../../atoms/Txt'

export const AppTitle = () => (
  <section className={style.container}>
    <Overlay>
      <div className={style.content}>
        <div className={style.title}>
          <WhiteTxt tag='h1' size='xxl'>Hokusai Katsushika</WhiteTxt>
        </div>
        <div className={style.icon}>
          <ScrollIcon/>
          <WhiteTxt size='s'>scroll up</WhiteTxt>
        </div>
      </div>
    </Overlay>
  </section>
);
