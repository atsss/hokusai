import React from 'react';
import { Txt } from '../Txt';
import style from './style.module.sass'

interface Props {
  children: React.ReactNode,
  className?: string
}

export const Button: React.FC<Props>  = ({ children, className }) => (
  <div className={[style.button, className].join(' ')}>
    <Txt size='l'>{children}</Txt>
  </div>
);
