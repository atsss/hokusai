import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Top } from '../../components/pages/Top';

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Top} />
    </Switch>
  </BrowserRouter>
);
