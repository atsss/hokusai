import React from 'react';
import style from './style.module.sass'

interface Props {
  children: React.ReactNode,
  className?: string
}

export const Card: React.FC<Props> = ({ children, className }) => (
  <div className={[style.card, style.background].join(' ')}>
    {children}
  </div>
);
