import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Top } from '../../components/pages/Top';
import { Ukiyoe } from '../../components/pages/Ukiyoe/';
import { Landscape } from '../../components/pages/Landscape/';

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Top} />
    <Route exact path="/ukiyoe" component={Ukiyoe} />
    <Route exact path="/landscape" component={Landscape} />
  </Switch>
);
