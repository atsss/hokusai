import React from 'react';
import style from './style.module.sass'
import { Txt } from '../../../atoms/Txt'
import { Img } from '../../../atoms/Img'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'
import PirntsImage from '../../../../images/prints/prints.png'
import GraetWaveImage from '../../../../images/prints/great_wave.png'

export const Print = () => (
  <Section>
    <FadeIn breakpoint={0.75}>
      <div className={style.title}>
        <Txt tag='h2' size='xl'>What is he famous for?</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.8}>
      <div className={'u-mt64'}>
        <Img src={PirntsImage} alt='Landscape prints'/>
        <Txt tag='h3' size='l' className='u-mt16'>Landscape prints</Txt>
        <Txt size='s' className='u-mt8'>Hokusai is best known as author of the woodblock print series Thirty-six Views of Mt. Fuji. He created the Thirty-Six Views both as a response to a domestic travel boom and as part of a personal obsession with Mt. Fuji.</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.95}>
      <div className={'u-mt64'}>
        <Img src={GraetWaveImage} alt='The Great Wave'/>
        <Txt tag='h3' size='l' className='u-mt16'>The Great Wave</Txt>
        <Txt size='s' className='u-mt8'>The Great Wave is his international iconic print. It secured Hokusai's fame both in Japan and overseas. As historian Richard Lane concludes, "if there is one work that made Hokusai's name, both in Japan and abroad, it must be this monumental print-series".</Txt>
      </div>
    </FadeIn>
  </Section>
);
