import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AddGameContainer, GamesContainer} from './containers';
import {Home, Archive, Welcome, About, Contact} from './components';

const routes = (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/games" component={Archive} />
        <Route path="add" component={AddGameContainer} />
    </Switch>
  </BrowserRouter>
);

export default routes;
