import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { PrintHero } from '../../molecules/Hero'
import { Hokusai } from '../../organisms/tops/Hokusai'
import { Ukiyoe } from '../../organisms/tops/Ukiyoe'
import { Print } from '../../organisms/tops/Print'
import { Menu } from '../../organisms/tops/Menu'

export const Top = () => (
  <Fragment>
    <PrintHero center>
      <WhiteTxt tag='h1' size='xxl'>Hokusai Katsushika</WhiteTxt>
    </PrintHero>
    <Hokusai/>
    <Ukiyoe/>
    <Print/>
    <Menu/>
  </Fragment>
);
