import React, { Fragment, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { WhiteTxt } from '../../atoms/Txt'
import { PrintHero } from '../../molecules/Hero'
import { Hokusai } from '../../organisms/tops/Hokusai'
import { Ukiyoe } from '../../organisms/tops/Ukiyoe'
import { Print } from '../../organisms/tops/Print'
import { Menu } from '../../organisms/tops/Menu'

export const Top = () => {
  const { search } = useLocation();
  const menuEl = useRef<null | HTMLDivElement>(null);

  useEffect(()=>{
    if(search !== '') {
      setTimeout(() => {
        menuEl!.current!.scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      }, 500);
    }
  })

  return (
    <Fragment>
      <PrintHero center>
        <WhiteTxt tag='h1' size='xxl'>Hokusai Katsushika</WhiteTxt>
      </PrintHero>
      <Hokusai/>
      <Ukiyoe/>
      <Print/>
      <div ref={menuEl}>
        <Menu/>
      </div>
    </Fragment>
  );
}
