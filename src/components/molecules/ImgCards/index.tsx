import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import style from './style.module.sass'
import { Txt } from "../../atoms/Txt";
import { Img } from "../../atoms/Img";

interface Props {
  title: string,
  data: any,
  className?: string
}

export const ImgCards: React.FC<Props> = ({ title, data, className }) => {
  return (
    <div className={className}>
      <Txt size='l'>{title}</Txt>
      <div className='u-mt8'>
        {data.map((card: any) => (<Img src={card.indexSrc}/>))}
      </div>
    </div>
  )
}
