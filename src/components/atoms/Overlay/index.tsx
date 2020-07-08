import React from 'react';
import style from './style.module.sass'

interface Props {
  children: React.ReactNode
}

export const Overlay: React.FC<Props>  = ({ children }) => (
  <div className={style.overlay}>
    {children}
  </div>
);
