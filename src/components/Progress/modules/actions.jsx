import { notification } from 'antd';
import {
  SET_PROGRESS,
} from './types';
import { AuthorizedApiService } from '../../../services/apiService';
import { parseError } from '../../../utils/errorParseHelper';

const setProgressForUser = (progress) => (
  { type: SET_PROGRESS, progress }
);

export const getProgressForUser = () => async (dispatch) => {
  AuthorizedApiService.get('api/user/my/progress')
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res);
      const { success, data } = res.data;
      if (success) {
        dispatch(setProgressForUser(data.data.reverse()));
      } else {
        notification.error({
          message: 'Invalid Progress Fetch!',
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

export const addProgressForUser = (progress) => async (dispatch) => {
  AuthorizedApiService.post('api/user/my/progress', progress)
    .then((res) => {
      const { success } = res.data;
      if (success) {
        notification.success({
          message: 'Add Progress Success!',
        });
        dispatch(getProgressForUser());
      } else {
        notification.error({
          message: 'Invalid Progress Fetch!',
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
