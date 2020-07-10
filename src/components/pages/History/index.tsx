import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { HistoryHero } from '../../molecules/Hero'
import { Header } from '../../organisms/Header'
import { History as SectionHistory } from "../../organisms/historis/History";

export const History = () => (
  <Fragment>
    <Header back='/?back=1'>Life of Hokusai</Header>
    <HistoryHero>
      <WhiteTxt tag='h1' size='l'>In the style of Hokusai's "Thirty-six Views of Mount Sainte-Victoire," he depicts the various expressions of mountains and nature, which led to revolutionary changes in Western painting.</WhiteTxt>
    </HistoryHero>
    <SectionHistory/>
  </Fragment>
);
