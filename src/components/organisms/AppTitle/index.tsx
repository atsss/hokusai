import React, { Fragment } from 'react';
import style from './style.module.sass'
import { ScrollIcon } from '../../molecules/ScrollIcon'
import { WhiteTxt } from '../../atoms/Txt'

export const AppTitle = () => (
  <Fragment>
    <div className={style.title}>
      <WhiteTxt tag='h1' size='xxl'>Hokusai Katsushika</WhiteTxt>
    </div>
    <div className={style.icon}>
      <ScrollIcon/>
      <WhiteTxt size='s'>scroll up</WhiteTxt>
    </div>
  </Fragment>
);
