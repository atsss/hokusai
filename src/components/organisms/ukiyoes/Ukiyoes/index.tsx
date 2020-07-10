import React from 'react';
import { EarlyUkiyoeData, MidUkiyoeData, LateUkiyoeData } from "../../../../config/Data";
import { Section } from '../../../atoms/Section'
import { FadeIn } from '../../../atoms/FadeIn'
import { ImgCards } from "../../../molecules/ImgCards";

export const Ukiyoes = () => (
  <Section>
    <FadeIn breakpoint={0.15}>
      <ImgCards title='Early Edo period' data={EarlyUkiyoeData}/>
      <ImgCards title='Middle Edo period' data={MidUkiyoeData} className='u-mt32'/>
      <ImgCards title='Late Edo period' data={LateUkiyoeData} className='u-mt32'/>
    </FadeIn>
  </Section>
);
