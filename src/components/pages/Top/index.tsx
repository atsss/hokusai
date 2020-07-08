import React from 'react';
import style from './style.module.sass'
import { ScrollIcon } from '../../molecules/ScrollIcon'
import { Overlay } from '../../atoms/Overlay'
import { Txt, WhiteTxt } from '../../atoms/Txt'

export const Top = () => (
  <section className={style.section}>
    <Overlay>
      <WhiteTxt tag='h1' size='xl'>Hokusai Katsushika</WhiteTxt>
      <ScrollIcon/>
    </Overlay>
  </section>
);
