import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { StyleHero } from '../../molecules/Hero'
import { Header } from '../../organisms/Header'

export const Style = () => (
  <Fragment>
    <Header back='/?back=1'>Style</Header>
    <StyleHero>
      <WhiteTxt tag='h1' size='l'>Hokusai's signature style is the three-color woodblock print.</WhiteTxt>
    </StyleHero>
  </Fragment>
);
