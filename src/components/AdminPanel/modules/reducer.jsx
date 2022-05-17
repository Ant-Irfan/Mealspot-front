/* eslint-disable default-param-last */
import {
  SET_EXERCISES,
  SET_WORKOUTS,
} from './types';

const defaultState = {
  exercises : [],
  workouts: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.exercises,
      };
    case SET_WORKOUTS:
      return {
        ...state,
        workouts: action.workouts,
      };
    default:
      return state;
  }
};
