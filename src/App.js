import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import GnomesDetail from './components/GnomeDetails';

export const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/gnomes/:id" component={GnomesDetail} />
    </Switch>
    <Loading />
  </Fragment>
);

export default connect()(App);
