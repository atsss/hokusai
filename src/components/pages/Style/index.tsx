import React, { Fragment } from 'react';
import { WhiteTxt } from '../../atoms/Txt'
import { StyleHero } from '../../molecules/Hero'
import { Header } from '../../organisms/Header'
import { Woodcut } from '../../organisms/styles/Woodcut'
import { Video } from '../../organisms/styles/Video'

export const Style = () => (
  <Fragment>
    <Header back='/?back=1'>Style</Header>
    <StyleHero>
      <WhiteTxt tag='h1' size='l'>His style is based on his unique treatment of landscapes that evoke a sense of large scale and a high degree of realism that fleshes out the subject matter</WhiteTxt>
    </StyleHero>
    <Woodcut/>
    <Video/>
  </Fragment>
);
