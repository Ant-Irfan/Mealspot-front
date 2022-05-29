/* eslint-disable default-param-last */
import {
  SET_EXERCISES,
  SET_WORKOUTS,
  SET_ROUTINES,
  SET_WORKOUT,
  SET_ROUTINE,
  SET_EXERCISE,
  SET_FOODSTUFF,
} from './types';

const defaultState = {
  exercises: [],
  workouts: [],
  routines: [],
  foodstuffs: [],
  workout: null,
  routine: null,
  exercise: null,
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
    default:
      return state;
  }
};
