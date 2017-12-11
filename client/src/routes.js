import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AddGameContainer, GamesContainer} from './containers';
import {Home, Archive, Welcome, About, Contact} from './components';

const store = configureStore();

const routes = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/games" component={Archive} />
          <Route path="add" component={AddGameContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default routes;
