/* eslint-disable default-param-last */
import {
  SET_PROGRESS,
} from './types';

const defaultState = {
  progress: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.progress,
      };
    default:
      return state;
  }
};
