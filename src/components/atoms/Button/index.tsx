import React from 'react';
import { Link } from 'react-router-dom';
import { Txt } from '../Txt';
import style from './style.module.sass'

interface Props {
  to: string,
  children: React.ReactNode,
  className?: string
}

export const Button: React.FC<Props>  = ({ to, children, className }) => (
  <Link to={to} className={[style.button, className].join(' ')}>
    <Txt size='l'>{children}</Txt>
  </Link>
);
