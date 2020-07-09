import React from 'react';
import style from './style.module.sass'
import { WhiteTxt } from '../../../atoms/Txt'
import { Img } from '../../../atoms/Img'
import UkiyoesImage from '../../../../images/ukiyoes/ukiyoes.png'

export const Ukiyoe = () => (
  <section className={style.container}>
      <div className={style.content}>
        <div className={style.title}>
          <WhiteTxt tag='h2' size='xl'>What is Ukiyoe?</WhiteTxt>
        </div>
        <div className={[style.hokusai, 'u-mt64'].join(' ')}>
          <Img src={UkiyoesImage} alt='Hokusai portrait'/>
          <WhiteTxt tag='h3' size='l' className='u-mt16'>Traditional paintings</WhiteTxt>
          <WhiteTxt size='s' className='u-mt8'>Ukiyoe is a genre of Japanese art which flourished from the 17th through 19th centuries. Its artists produced woodblock prints and paintings of such subjects as female beauties; kabuki actors and sumo wrestlers; scenes from history and folk tales; travel scenes and landscapes.</WhiteTxt>
        </div>
      </div>
  </section>
);
