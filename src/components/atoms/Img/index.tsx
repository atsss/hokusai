import React from 'react';
import style from './style.module.sass'

interface Props {
  src: string,
  alt?: string
}

export const Img: React.FC<Props> = ({ src, alt }) => <img className={style.img} src={src} alt={alt}/>
