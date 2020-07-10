import React from 'react';
import style from './style.module.sass'
import { Txt } from '../../../atoms/Txt'
import { Card } from '../../../atoms/Card'
import { Img } from '../../../atoms/Img'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'
import OneImage from '../../../../images/styles/one.jpg'
import TwoImage from '../../../../images/styles/two.jpg'

export const Woodcut = () => (
  <Section>
    <FadeIn breakpoint={0.1}>
      <div className={style.title}>
        <Txt tag='h2' size='xl'>Woodcut Prints</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.15}>
      <div className={'u-mt64'}>
        <Card>
          <Img src={OneImage} alt='Hokusai portrait'/>
        </Card>
        <Txt tag='h3' size='l' className='u-mt16'>Engraving</Txt>
        <Txt size='s' className='u-mt8'>He uses different tools, such as a small knife and a chisel, depending on the part of the work. It is said that it takes at least seven years to learn this elaborate technique.</Txt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.4}>
      <div className={'u-mt64'}>
        <Card>
          <Img src={TwoImage} alt='Hokusai portrait'/>
        </Card>
        <Txt tag='h3' size='l' className='u-mt16'>Printing</Txt>
        <Txt size='s' className='u-mt8'>Based on the color-coded carved blocks, he prints each one, and then overlaps the colors to create a work of art.</Txt>
      </div>
    </FadeIn>
  </Section>
);
