/* eslint-disable default-param-last */
import {
  SET_EXERCISES,
  SET_WORKOUTS,
  SET_ROUTINES,
  SET_WORKOUT,
  SET_ROUTINE,
  SET_EXERCISE,
  SET_FOODSTUFF,
  SET_USERS,
  SET_USER,
  SET_NUMBER_OF_USERS,
  SET_TRANSACTONS,
  SET_NUMBER_OF_TRANSACTIONS,
} from './types';

const defaultState = {
  exercises: [],
  workouts: [],
  routines: [],
  foodstuffs: [],
  users: [],
  transactions: [],
  workout: null,
  routine: null,
  exercise: null,
  user: null,
  number_of_users: null,
  total_pages: null,
  current_page: null,
  number_of_transactions: null,
  total_pages_transactions: null,
  current_page_transactions: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.exercises,
      };
    case SET_EXERCISE:
      return {
        ...state,
        exercise: action.exercise,
      };
    case SET_WORKOUTS:
      return {
        ...state,
        workouts: action.workouts,
      };
    case SET_WORKOUT:
      return {
        ...state,
        workout: action.workout,
      };
    case SET_ROUTINES:
      return {
        ...state,
        routines: action.routines,
      };
    case SET_ROUTINE:
      return {
        ...state,
        routine: action.routine,
      };
    case SET_FOODSTUFF:
      return {
        ...state,
        foodstuffs: action.foodstuff,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_NUMBER_OF_USERS:
      return {
        ...state,
        number_of_users: action.number,
        total_pages: action.number < 10 ? 1 : action.number / 10,
        current_page: action.page,
      };
    case SET_TRANSACTONS:
      return {
        ...state,
        transactions: action.transactions,
      };
    case SET_NUMBER_OF_TRANSACTIONS:
      return {
        ...state,
        number_of_transactions: action.transactions,
        total_pages_transactions: action.number < 10 ? 1 : action.number / 10,
        current_page_transactions: action.page,
      };
    default:
      return state;
  }
};
