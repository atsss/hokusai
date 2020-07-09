import React from 'react';
import style from './style.module.sass'
import { Txt } from '../../../atoms/Txt'
import { Img } from '../../../atoms/Img'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'
import HokusiImage from '../../../../images/hokusai/portrait.png'
import EdoImage from '../../../../images/hokusai/edo.png'

export const Hokusai = () => (
  <Section>
    <FadeIn breakpoint={0.1}>
      <div className={style.title}>
        <Txt tag='h2' size='xl'>Who is Hokusai?</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.15}>
      <div className={'u-mt64'}>
        <Img src={HokusiImage} alt='Hokusai portrait'/>
        <Txt tag='h3' size='l' className='u-mt16'>Japanese Ukiyoe artist</Txt>
        <Txt size='s' className='u-mt8'>Hokusai Katsushika was a Japanese artist, ukiyoe painter and printmaker. He is best known as author of the woodblock print series Thirty-six Views of Mount Fuji.</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.29}>
      <div className={'u-mt64'}>
        <Img src={EdoImage} alt='Hokusai portrait'/>
        <Txt tag='h3' size='l' className='u-mt16'>Born in Edo period</Txt>
        <Txt size='s' className='u-mt8'>He was born in Edo on 31 October 1760 and died on 10 May 1849. Edo was the name of old Japanese capital, which is called Tokyo now.  The period is called Edo period.</Txt>
      </div>
    </FadeIn>
  </Section>
);
