import React from 'react';
import { UkiyoeData } from "../../../../config/Data";
import { Section } from '../../../atoms/Section'
import { FadeIn } from '../../../atoms/FadeIn'
import { ImgCards } from "../../../molecules/ImgCards";

export const Ukiyoes = () => (
  <Section>
    <FadeIn breakpoint={0.15}>
      <ImgCards title='Early Edo period' data={UkiyoeData}/>
      <ImgCards title='Middle Edo period' data={UkiyoeData} className='u-mt32'/>
      <ImgCards title='Late Edo period' data={UkiyoeData} className='u-mt32'/>
    </FadeIn>
  </Section>
);
