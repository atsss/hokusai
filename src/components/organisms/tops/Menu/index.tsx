import React from 'react';
import style from './style.module.sass'
import { WhiteTxt } from '../../../atoms/Txt'
import { Button } from '../../../atoms/Button'

export const Menu = () => (
  <section className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <WhiteTxt tag='h2' size='xl'>What is Ukiyoe?</WhiteTxt>
        </div>
        <div className={'u-mt64'}>
          <Button>Ukiyoe</Button>
          <Button className='u-mt32'>Life of Hokusai</Button>
          <Button className='u-mt32'>Hokusai's style</Button>
          <Button className='u-mt32'>Landscape prints</Button>
        </div>
      </div>
  </section>
);
