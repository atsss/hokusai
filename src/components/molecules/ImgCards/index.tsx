import React from 'react';
import { Txt } from "../../atoms/Txt";
import { HorizontalScroll } from '../../atoms/HorizontalScroll'
import { ImgWithModal } from '../../molecules/ImgWithModal'

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
            <ImgWithModal key={index} data={list}/>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  )
}
