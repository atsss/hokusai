import React from 'react';
import style from './style.module.sass'
import { WhiteTxt } from '../../../atoms/Txt'
import { Button } from '../../../atoms/Button'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'

export const Menu = () => (
  <Section background>
    <FadeIn breakpoint={0.99}>
      <div className={style.title}>
        <WhiteTxt tag='h2' size='xl'>What is more?</WhiteTxt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.999}>
      <div className={'u-mt64'}>
        <Button to='/ukiyoe'>Ukiyoe</Button>
        <Button to='/history' className='u-mt32'>Life of Hokusai</Button>
        <Button to='/style' className='u-mt32'>Hokusai's style</Button>
        <Button to='/landscape' className='u-mt32'>Landscape prints</Button>
      </div>
    </FadeIn>
  </Section>
);
