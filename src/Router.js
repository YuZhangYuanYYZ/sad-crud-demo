import { MainContent } from './components/MainContent';
import { Login } from './components/Login';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact strict path="/maincontent">
        <MainContent />
      </Route>
    </Switch>
  );
}
