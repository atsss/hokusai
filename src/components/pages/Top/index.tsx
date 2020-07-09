import React from 'react';
import style from './style.module.sass'
import { Overlay } from '../../atoms/Overlay'
import { AppTitle } from '../../organisms/AppTitle'

export const Top = () => (
  <section className={style.container}>
    <Overlay>
      <div className={style.content}>
        <AppTitle/>
      </div>
    </Overlay>
  </section>
);
