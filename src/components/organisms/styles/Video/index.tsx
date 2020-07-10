import React from 'react';
import ReactPlayer from 'react-player'
import style from './style.module.sass'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../..//atoms/Section/'
import { WhiteTxt } from '../../../atoms/Txt'
import { Card } from '../../../atoms/Card'
import { Button } from '../../../atoms/Button'

export const Video = () => (
  <Section background>
    <FadeIn breakpoint={0.66}>
      <div className={style.title}>
        <WhiteTxt size='xl'>Video</WhiteTxt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.73}>
      <Card className='u-mt64'>
        <ReactPlayer url='https://www.youtube.com/watch?v=kEubj3c2How' width='100%'/>
      </Card>
    </FadeIn>
    <FadeIn breakpoint={0.83}>
      <Button to='#' className='u-mt64'>Try His Style</Button>
    </FadeIn>
  </Section>
)
