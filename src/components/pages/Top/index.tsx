import React, { Fragment } from 'react';
import { AppTitle } from '../../organisms/AppTitle'
import { Hokusai } from '../../organisms/tops/Hokusai'
import { Ukiyoe } from '../../organisms/tops/Ukiyoe'
import { Print } from '../../organisms/tops/Print'

export const Top = () => (
  <Fragment>
    <AppTitle/>
    <Hokusai/>
    <Ukiyoe/>
    <Print/>
  </Fragment>
);
