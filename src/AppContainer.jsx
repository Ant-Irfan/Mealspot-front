import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router-dom';
import {
  RouteWithoutNavbar,
  PrivateNavigationMenuRoute,
} from './routing/routes';
import {
  loginRoute,
  registerRoute,
  registerConfirmedRoute,
  wizzardRoute,
  resetPasswordRoute,
  adminTrainingRoute,
  adminAddExerciseRoute,
  adminExercisesRoute,
  adminTrainingTableRoute,
} from './utils/pathsHelper';
import Authentication from './components/Authentication';
import RegisterConfirmed from './components/Authentication/RegisterConfirmed/RegisterConfirmed';
import Wizzard from './components/Wizzard';
import AdminTraining from './components/AdminPanel/Training/AddTraining';
import AdminAddExercise from './components/AdminPanel/Exercise/AddExercise';
import AdminExercises from './components/AdminPanel/Exercise/TableExercises';
import AdminTrainingTable from './components/AdminPanel/Training/TableTraining';

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
    <PrivateNavigationMenuRoute
      path={adminTrainingRoute}
      exact
      component={AdminTraining}
    />
    <PrivateNavigationMenuRoute
      path={adminAddExerciseRoute}
      exact
      component={AdminAddExercise}
    />
    <PrivateNavigationMenuRoute
      path={adminExercisesRoute}
      exact
      component={AdminExercises}
    />
    <PrivateNavigationMenuRoute
      path={adminTrainingTableRoute}
      exact
      component={AdminTrainingTable}
    />
  </Switch>
);
AppContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default withRouter(AppContainer);
