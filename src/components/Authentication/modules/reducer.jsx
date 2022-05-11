/* eslint-disable default-param-last */
import {
  SET_WIZZARD_INITIAL_VALUES,
  SET_WIZZARD_ENABLED,
} from './types';

const defaultState = {
  initialFormValues : null,
  wizzardEnabled: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_WIZZARD_INITIAL_VALUES:
      return {
        ...state,
        initialFormValues: action.wizzardValues,
      };
    case SET_WIZZARD_ENABLED:
      return {
        ...state,
        wizzardEnabled: action.isEnabled,
      };
    default:
      return state;
  }
};
