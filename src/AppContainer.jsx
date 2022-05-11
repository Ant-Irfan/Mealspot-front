import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router-dom';
import {
  RouteWithoutNavbar,
} from './routing/routes';
import {
  loginRoute,
  registerRoute,
  registerConfirmedRoute,
  wizzardRoute,
  resetPasswordRoute,
} from './utils/pathsHelper';
import Authentication from './components/Authentication';
import RegisterConfirmed from './components/Authentication/RegisterConfirmed/RegisterConfirmed';
import Wizzard from './components/Wizzard';

const AppContainer = ({ location }) => (
  <Switch location={location}>
    <RouteWithoutNavbar
      path={loginRoute}
      exact
      component={Authentication}
    />
    <RouteWithoutNavbar
      path={registerRoute}
      exact
      component={Authentication}
    />
    <RouteWithoutNavbar
      path={resetPasswordRoute}
      exact
      component={Authentication}
    />
    <RouteWithoutNavbar
      path={registerConfirmedRoute}
      exact
      component={RegisterConfirmed}
    />
    <RouteWithoutNavbar
      path={wizzardRoute}
      exact
      component={Wizzard}
    />
  </Switch>
);
AppContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(AppContainer);
