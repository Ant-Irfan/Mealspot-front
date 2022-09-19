import React from 'react';
import PropTypes from 'prop-types';
import { Switch, withRouter } from 'react-router-dom';
import {
  RouteWithoutNavbar,
  PrivateNavigationMenuRoute,
  PrivateNavigationMenuUserRoute,
  PrivateNoNavigationMenuUserRoute,
} from './routing/routes';
import {
  loginRoute,
  registerRoute,
  registerConfirmedRoute,
  wizzardRoute,
  resetPasswordRoute,
  resetPasswordRouteWithId,
  adminTrainingRoute,
  adminAddExerciseRoute,
  adminAddMealRoute,
  adminExercisesRoute,
  adminTrainingTableRoute,
  adminRoutinesTableRoute,
  adminAddRoutineRoute,
  adminViewTraining,
  adminViewRoutine,
  adminViewExercise,
  wizzardRouteWithToken,
  adminAddFoodstuff,
  adminTableFoodstuff,
  userProfileRoute,
  userPricingRoute,
  userMealsRoute,
  singleMealRoute,
  adminUsers,
  adminSingleUser,
  progressUser,
  AdminTransaction,
  workoutsUser,
  singleWorkoutsUser,
  userCheckoutPage,
  checkoutSuccessPage,
  adminMealTableRoute,
  adminViewMeal,
} from './utils/pathsHelper';
import Authentication from './components/Authentication';
import RegisterConfirmed from './components/Authentication/RegisterConfirmed/RegisterConfirmed';
import Wizzard from './components/Wizzard';
import AdminTraining from './components/AdminPanel/Training/AddTraining';
import AdminAddExercise from './components/AdminPanel/Exercise/AddExercise';
import AdminExercises from './components/AdminPanel/Exercise/TableExercises';
import AdminTrainingTable from './components/AdminPanel/Training/TableTraining';
import AdminAddRoutine from './components/AdminPanel/Routines/AddRoutine';
import AdminRoutinesTable from './components/AdminPanel/Routines/RoutinesTable';
import AdminViewWorkout from './components/AdminPanel/Training/ViewTraining';
import AdminViewRoutine from './components/AdminPanel/Routines/ViewRoutine';
import AdminTransactions from './components/AdminPanel/Transactions/TableTransactions';
import AdminViewExercise from './components/AdminPanel/Exercise/ViewExercise';
import AdminAddFoodstuff from './components/AdminPanel/Foodstuff/AddFoodstuff';
import AdminFoodstuffTable from './components/AdminPanel/Foodstuff/TableFoodstuff';
import AdminSingleUser from './components/AdminPanel/Users/EditUser';
import AdminUsers from './components/AdminPanel/Users/TableUsers';
import UserProfile from './components/User';
import PricingPage from './components/Pricing';
import UserMeals from './components/Meals';
import Progress from './components/Progress';
import Workout from './components/Workout';
import Checkout from './components/Checkout';
import SingleMeal from './components/Meals/SingleMeal';
import SingleWorkout from './components/Workout/SingleWorkout';
import CheckoutSuccess from './components/Checkout/CheckoutSuccess/CheckoutSuccess';
import AddMeal from './components/AdminPanel/Meal/AddMeal';
import AdminMealsTable from './components/AdminPanel/Meal/MealTable';
import AdminViewMeal from './components/AdminPanel/Meal/ViewMeal';

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
      path={resetPasswordRouteWithId}
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
    <RouteWithoutNavbar
      path={wizzardRouteWithToken}
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
    <PrivateNavigationMenuRoute
      path={adminAddRoutineRoute}
      exact
      component={AdminAddRoutine}
    />
    <PrivateNavigationMenuRoute
      path={adminRoutinesTableRoute}
      exact
      component={AdminRoutinesTable}
    />
    <PrivateNavigationMenuRoute
      path={adminViewTraining}
      exact
      component={AdminViewWorkout}
    />
    <PrivateNavigationMenuRoute
      path={adminViewRoutine}
      exact
      component={AdminViewRoutine}
    />
    <PrivateNavigationMenuRoute
      path={adminViewExercise}
      exact
      component={AdminViewExercise}
    />
    <PrivateNavigationMenuRoute
      path={adminAddFoodstuff}
      exact
      component={AdminAddFoodstuff}
    />
    <PrivateNavigationMenuRoute
      path={adminTableFoodstuff}
      exact
      component={AdminFoodstuffTable}
    />
    <PrivateNavigationMenuRoute
      path={adminUsers}
      exact
      component={AdminUsers}
    />
    <PrivateNavigationMenuRoute
      path={adminAddMealRoute}
      exact
      component={AddMeal}
    />
    <PrivateNavigationMenuRoute
      path={adminViewMeal}
      exact
      component={AdminViewMeal}
    />
    <PrivateNavigationMenuRoute
      path={adminMealTableRoute}
      exact
      component={AdminMealsTable}
    />
    <PrivateNavigationMenuRoute
      path={AdminTransaction}
      exact
      component={AdminTransactions}
    />
    <PrivateNavigationMenuRoute
      path={adminSingleUser}
      exact
      component={AdminSingleUser}
    />
    <PrivateNavigationMenuUserRoute
      path={userProfileRoute}
      exact
      component={UserProfile}
    />
    <PrivateNavigationMenuUserRoute
      path={userMealsRoute}
      exact
      component={UserMeals}
    />
    <PrivateNoNavigationMenuUserRoute
      path={userPricingRoute}
      exact
      component={PricingPage}
    />
    <PrivateNoNavigationMenuUserRoute
      path={userCheckoutPage}
      exact
      component={Checkout}
    />
    <PrivateNavigationMenuUserRoute
      path={singleMealRoute}
      exact
      component={SingleMeal}
    />
    <PrivateNavigationMenuUserRoute
      path={progressUser}
      exact
      component={Progress}
    />
    <PrivateNavigationMenuUserRoute
      path={workoutsUser}
      exact
      component={Workout}
    />
    <PrivateNavigationMenuUserRoute
      path={singleWorkoutsUser}
      exact
      component={SingleWorkout}
    />
    <PrivateNoNavigationMenuUserRoute
      path={checkoutSuccessPage}
      exact
      component={CheckoutSuccess}
    />
  </Switch>
);
AppContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};
AppContainer.defaultProps = {
  location: {
    pathname: '',
  },
};
export default withRouter(AppContainer);
