import React from 'react';
import { Txt } from '../../../atoms/Txt'
import { Img } from '../../../atoms/Img'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'
import { Histories } from '../../../../config/Data';

export const History = () => (
  <Section>
    <FadeIn breakpoint={0.2}>
    <Txt tag='h2' size='l'>History</Txt>
    </FadeIn>
    <FadeIn breakpoint={0.25}>
      <div className={'u-mt16'}>
        <Img src={Histories[0]} alt='Hokusai portrait'/>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.7}>
      <div className={'u-mt8'}>
        <Img src={Histories[1]} alt='Hokusai portrait'/>
      </div>
    </FadeIn>
    <FadeIn breakpoint={1.1}>
      <div className={'u-mt8'}>
        <Img src={Histories[2]} alt='Hokusai portrait'/>
      </div>
    </FadeIn>
    <FadeIn breakpoint={1.3}>
      <div className={'u-mt8'}>
        <Img src={Histories[3]} alt='Hokusai portrait'/>
      </div>
    </FadeIn>
    <FadeIn breakpoint={1.6}>
      <div className={'u-mt8'}>
        <Img src={Histories[4]} alt='Hokusai portrait'/>
      </div>
    </FadeIn>
  </Section>
);
