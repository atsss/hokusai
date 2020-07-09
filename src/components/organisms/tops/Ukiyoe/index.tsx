import React from 'react';
import style from './style.module.sass'
import { WhiteTxt } from '../../../atoms/Txt'
import { Img } from '../../../atoms/Img'
import { FadeIn } from '../../../atoms/FadeIn'
import { Section } from '../../../atoms/Section'
import UkiyoesImage from '../../../../images/ukiyoes/ukiyoes.png'

export const Ukiyoe = () => (
  <Section background>
    <FadeIn breakpoint={0.44}>
      <div className={style.title}>
        <WhiteTxt tag='h2' size='xl'>What is Ukiyoe?</WhiteTxt>
      </div>
    </FadeIn>
    <FadeIn breakpoint={0.51}>
      <div className={'u-mt64'}>
        <Img src={UkiyoesImage} alt='ukiyoe paitings'/>
        <WhiteTxt tag='h3' size='l' className='u-mt16'>Traditional paintings</WhiteTxt>
        <WhiteTxt size='s' className='u-mt8'>Ukiyoe is a genre of Japanese art which flourished from the 17th through 19th centuries. Its artists produced woodblock prints and paintings of such subjects as female beauties; kabuki actors and sumo wrestlers; scenes from history and folk tales; travel scenes and landscapes.</WhiteTxt>
      </div>
    </FadeIn>
  </Section>
);
