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
} from './utils/pathsHelper';
import Authentication from './components/Authentication/View';
import RegisterConfirmed from './components/Authentication/RegisterConfirmed/RegisterConfirmed';
import Wizzard from './components/Wizzard/View';

const AppContainer = ({ location }) => (
  <Switch location={location}>
    <RouteWithoutNavbar
      path={loginRoute}
      component={Authentication}
    />
    <RouteWithoutNavbar
      path={registerRoute}
      component={Authentication}
    />
    <RouteWithoutNavbar
      path={registerConfirmedRoute}
      component={RegisterConfirmed}
    />
    <RouteWithoutNavbar
      path={wizzardRoute}
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
