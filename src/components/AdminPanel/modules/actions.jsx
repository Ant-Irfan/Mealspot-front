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

const setExercises = (exercises) => (
  { type: SET_EXERCISES, exercises }
);
const setFoodstuffs = (foodstuff) => (
  { type: SET_FOODSTUFF, foodstuff }
);
const setWorkouts = (workouts) => (
  { type: SET_WORKOUTS, workouts }
);
const setSingleWorkout = (workout) => (
  { type: SET_WORKOUT, workout }
);
const setTrainingRoutines = (routines) => (
  { type: SET_ROUTINES, routines }
);
const setSingleTrainingRoutine = (routine) => (
  { type: SET_ROUTINE, routine }
);
const setSingleExercise = (exercise) => (
  { type: SET_EXERCISE, exercise }
);
const setUsers = (users) => (
  { type: SET_USERS, users }
);
const setSingleUser = (user) => (
  { type: SET_USER, user }
);
const setNumberOfUsers = (number, page) => (
  { type: SET_NUMBER_OF_USERS, number, page }
);
const setTransactions = (transactions) => (
  { type: SET_TRANSACTONS, transactions }
);
const setNumberOfTransactions = (number, page) => (
  { type: SET_NUMBER_OF_TRANSACTIONS, number, page }
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

export const getSingleExercise = (id) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/exercise/${id}`)
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        console.log(data);
        dispatch(setSingleExercise(data));
      } else {
        notification.error({
          message: 'Invalid Exercise Fetch!',
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

export const getSingleWorkout = (id) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/training/${id}`)
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        console.log(data);
        dispatch(setSingleWorkout(data));
      } else {
        notification.error({
          message: 'Invalid Workout Fetch!',
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

// TRAINING ROUTINES CONTROLLER
export const addTrainingRoutine = (trainingRoutine) => async (/* dispatch */) => {
  AuthorizedApiService.post('api/admin/training-routine', trainingRoutine)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        history.push('/admin/routines');
        notification.success({
          message: 'Training Routine Added!',
        });
      } else {
        notification.error({
          message: 'Invalid Trainig Routine!',
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

export const getTrainingRoutines = () => async (dispatch) => {
  AuthorizedApiService.get('api/admin/training-routine')
    .then((res) => {
      const { success, data } = res.data;
      console.log(data);
      if (success) {
        dispatch(setTrainingRoutines(data.data));
      } else {
        notification.error({
          message: 'Invalid Trainig Routines fetch Fetch!',
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

export const getSingleTrainingRoutine = (id) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/training-routine/${id}`)
    .then((res) => {
      const { success, data } = res.data;
      console.log(data);
      if (success) {
        dispatch(setSingleTrainingRoutine(data));
      } else {
        notification.error({
          message: 'Invalid Trainig Routine Fetch!',
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

export const deleteRoutine = (routineId) => async (dispatch) => {
  AuthorizedApiService.delete(`api/admin/training-routine/${routineId}`)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        dispatch(getTrainingRoutines());
        notification.success({
          message: 'Delete Routine success!',
        });
      } else {
        notification.error({
          message: 'Invalid Delete Routine!',
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

// FOODSTUFF CONTROLLER
export const getFoodstuff = () => async (dispatch) => {
  AuthorizedApiService.get('api/admin/meal/foodstuff')
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        dispatch(setFoodstuffs(data.data));
      } else {
        notification.error({
          message: 'Invalid Foodstuff Fetch!',
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

export const addFoodstuff = (foodstuff) => async (/* dispatch */) => {
  AuthorizedApiService.post('api/admin/meal/foodstuff', foodstuff)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        history.push('/admin/foodstuff');
        notification.success({
          message: 'Foodstuff Added!',
        });
      } else {
        notification.error({
          message: 'Invalid Add Foodstuff!',
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

export const deleteFoodstuff = (foodstuffId) => async (dispatch) => {
  AuthorizedApiService.delete(`api/admin/meal/foodstuff/${foodstuffId}`)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        dispatch(getFoodstuff());
        notification.success({
          message: 'Delete Foodstuff success!',
        });
      } else {
        notification.error({
          message: 'Invalid Delete Foodstuff!',
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

export const getUsers = (page) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/user?per_page=10&page=${page}`)
    .then((res) => {
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        dispatch(setUsers(data.data));
        dispatch(setNumberOfUsers(data.total, data.page));
      } else {
        notification.error({
          message: 'Invalid Users Fetch!',
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

export const getSingleUser = (id) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/user/${id}`)
    .then((res) => {
      const { success, data } = res.data;
      if (success) {
        console.log(data);
        dispatch(setSingleUser(data));
      } else {
        notification.error({
          message: 'Invalid User Fetch!',
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

export const getUsersByFilter = (filter, value) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/user?filter=${filter} : '${value}'`)
    .then((res) => {
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        dispatch(setUsers(data.data));
      } else {
        notification.error({
          message: 'Invalid Users Fetch!',
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

export const getTransactions = (page) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/transaction?per_page=10&page=${page}`)
    .then((res) => {
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        dispatch(setTransactions(data.data));
        dispatch(setNumberOfTransactions(data.total, data.page));
      } else {
        notification.error({
          message: 'Invalid Transactions Fetch!',
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

export const getTransactionsByFilter = (filter, value) => async (dispatch) => {
  AuthorizedApiService.get(`api/admin/transaction?filter=${filter} : '${value}'`)
    .then((res) => {
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        dispatch(setTransactions(data.data));
      } else {
        notification.error({
          message: 'Invalid Transaction Fetch!',
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

export const getTransactionsForUser = (userId) => async (dispatch) => {
  AuthorizedApiService.get('api/admin/transaction?per_page=1000')
    .then((res) => {
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        const filteredTransactions = data.data.filter((trans) => trans.user_id === userId);
        dispatch(setTransactions(filteredTransactions));
      } else {
        notification.error({
          message: 'Invalid Transactions Fetch!',
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
