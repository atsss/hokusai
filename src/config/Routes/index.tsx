import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ScrollToTop } from '../../components/utils/ScrollToTop';
import { Top } from '../../components/pages/Top';
import { Ukiyoe } from '../../components/pages/Ukiyoe/';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Top} />
    <Route exact path="/ukiyoe" component={Ukiyoe} />
  </Switch>
);
