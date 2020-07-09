import React from 'react';
import { Link } from 'react-router-dom';
import { WhiteTxt } from '../../atoms/Txt';
import { Img } from '../../atoms/Img';
import style from './style.module.sass'
import BackIcon from '../../../images/backIcon.png'

interface Props {
  back: string,
  children: React.ReactNode,
  className?: string
}

export const Header: React.FC<Props>  = ({ back, children, className }) => (
  <header className={style.header}>
    <div className={style.back}>
      <Link to={back} className={[style.button, className].join(' ')}>
        <Img src={BackIcon}/>
      </Link>
    </div>
    <div className={style.title}>
      <WhiteTxt tag='h1' size='l'>{children}</WhiteTxt>
    </div>
    <div className={style.dummy}>d</div>
  </header>
);
