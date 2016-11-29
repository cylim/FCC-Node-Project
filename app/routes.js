import React from 'react';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';

import Main from './components/Main';
import Home from './components/Home';

// const store = configureStore();

var routes = (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='vote' component={Home} />
      </Route>
    </Router>
)

export default routes;