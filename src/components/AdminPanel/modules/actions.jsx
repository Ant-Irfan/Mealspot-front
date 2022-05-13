/* eslint-disable no-console */
import { notification } from 'antd';
/* import history from '../../../history'; */
import { AuthorizedApiService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';

export const getExercises = () => async (/* dispatch */) => {
  AuthorizedApiService.get('api/admin/exercise')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const addExercise = (exercise) => async (/* dispatch */) => {
  console.log(exercise);
  AuthorizedApiService.post('api/admin/exercise', exercise)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};

export const deleteExercise = (exerciseId) => async (/* dispatch */) => {
  console.log(exerciseId);
  AuthorizedApiService.delete(`api/admin/exercise/${exerciseId}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      const error = parseError(err);
      notification.error({
        message: error,
      });
    });
};
