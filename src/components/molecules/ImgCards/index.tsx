import React from 'react';
import { Txt } from "../../atoms/Txt";
import { Img } from "../../atoms/Img";
import { HorizontalScroll } from '../../atoms/HorizontalScroll'

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
        <HorizontalScroll>
          {data.map((list: any, index: number) => (
            <div key={index}>
              <Img src={list.indexSrc}/>
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  )
}
