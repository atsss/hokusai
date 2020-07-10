import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { PrintHero } from '../../molecules/Hero'
import { Header } from '../../organisms/Header'
import { Map } from '../../organisms/landscape/Map'

export const Landscape = () => (
  <Fragment>
    <Header back='/?back=1'>Landscape prints</Header>
    <PrintHero>
      <WhiteTxt tag='h1' size='l'>With the publication of his "Thirty-six Views of Mount Fuji", Hokusai's position as a painter became immovable, and he also opened up a new side to landscape painting.</WhiteTxt>
    </PrintHero>
    <Map/>
  </Fragment>
);
