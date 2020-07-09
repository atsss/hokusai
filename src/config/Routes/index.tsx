import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Top } from '../../components/pages/Top';
import { Ukiyoe } from '../../components/pages/Ukiyoe/';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Top} />
      <Route exact path="/ukiyoe" component={Ukiyoe} />
    </Switch>
  </BrowserRouter>
);
