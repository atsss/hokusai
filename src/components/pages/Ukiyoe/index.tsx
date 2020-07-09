import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { UkiyoeHero } from '../../molecules/Hero'
import { Header } from '../../organisms/Header'

export const Ukiyoe = () => (
  <Fragment>
    <Header back='/?back=1'>Ukiyoe</Header>
    <UkiyoeHero>
      <WhiteTxt tag='h1' size='l'>The most famous painting style is Ukiyoe. The background to the spread of this art form among the general public is its mass production and its ability to lower prices.</WhiteTxt>
    </UkiyoeHero>
  </Fragment>
);
