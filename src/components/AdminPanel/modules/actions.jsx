/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import { notification } from 'antd';
/* import axios from 'axios'; */
import history from '../../../history';
import { AuthorizedApiService, AuthorizedApiFormDataService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';
import {
  SET_EXERCISES,
  SET_WORKOUTS,
} from './types';

const setExercises = (exercises) => (
  { type: SET_EXERCISES, exercises }
);
const setWorkouts = (workouts) => (
  { type: SET_WORKOUTS, workouts }
);

// EXERCISES CONTROLLER
export const getExercises = () => async (dispatch) => {
  AuthorizedApiService.get('api/admin/exercise')
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        dispatch(setExercises(data.data));
      } else {
        notification.error({
          message: 'Invalid Exercises Fetch!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const addExercise = (exercise) => async (/* dispatch */) => {
  const formData = new FormData();
  const jsonData = JSON.stringify(exercise.data);
  const blobData = new Blob([jsonData], {
    type: 'application/json',
  });
  formData.append('male_photo_start', exercise.male_photo_start);
  formData.append('male_photo_end', exercise.male_photo_end);
  formData.append('female_photo_start', exercise.female_photo_start);
  formData.append('female_photo_end', exercise.female_photo_end);
  formData.append('data', blobData);
  AuthorizedApiFormDataService.post('api/admin/exercise', formData)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        history.push('/admin/exercises');
        notification.success({
          message: 'Exercise Added!',
        });
      } else {
        notification.error({
          message: 'Invalid Add Exercise!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const deleteExercise = (exerciseId) => async (dispatch) => {
  AuthorizedApiService.delete(`api/admin/exercise/${exerciseId}`)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        dispatch(getExercises());
        notification.success({
          message: 'Delete Exercise success!',
        });
      } else {
        notification.error({
          message: 'Invalid Delete Exercise!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const changeIsActiveExercise = (exercise, isActive) => async (dispatch) => {
  const postData = {
    ...exercise,
    active: isActive,
  };
  AuthorizedApiService.put(`api/admin/exercise/${exercise.id}`, postData)
    .then((res) => {
      console.log(res);
      const { success } = res.data;
      if (success) {
        dispatch(getExercises());
        notification.success({
          message: 'Changed Exercise Activity!',
        });
      } else {
        notification.error({
          message: 'Exercise Activity Request Error!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

// TRAINING CONTROLLER
export const getWorkouts = () => async (dispatch) => {
  AuthorizedApiService.get('api/admin/training')
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        dispatch(setWorkouts(data.data));
      } else {
        notification.error({
          message: 'Invalid Workouts Fetch!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const addWorkouts = (workout) => async (/* dispatch */) => {
  console.log(workout);
  AuthorizedApiService.post('api/admin/training', workout)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        history.push('/admin/workout');
        notification.success({
          message: 'Workout Added!',
        });
      } else {
        notification.error({
          message: 'Invalid Add Workout!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const deleteWorkout = (workoutId) => async (dispatch) => {
  AuthorizedApiService.delete(`api/admin/training/${workoutId}`)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        dispatch(getWorkouts());
        notification.success({
          message: 'Delete Workout success!',
        });
      } else {
        notification.error({
          message: 'Invalid Delete Workout!',
        });
      }
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};
