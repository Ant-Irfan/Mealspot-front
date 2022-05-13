import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import styles from '../../adminPanel.module.scss';
import history from '../../../../history';
import { adminTrainingRoute } from '../../../../utils/pathsHelper';

const AdminTrainingTable = () => {
  const toAddWorkoutPage = () => {
    history.push(adminTrainingRoute);
  };
  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Workouts
          </h1>
          <button
            type="button"
            onClick={toAddWorkoutPage}
            className="primary-color-button btn btn-light"
            style={{ height: 42 }}
          >
            ADD WORKOUT
          </button>
        </div>
        <div className="container-content">
          <table className="table">
            <thead>
              <tr className="table-secondary">
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Level</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>123456789</td>
                <td>Name of Workout</td>
                <td>Level of Workout</td>
                <td>
                  <DeleteTwoTone
                    twoToneColor="#D11A2A"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>123456789</td>
                <td>Name of Workout</td>
                <td>Description of Workout</td>
                <td>
                  <DeleteTwoTone
                    twoToneColor="#D11A2A"
                    style={{ fontSize: 20, marginLeft: 15 }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTrainingTable;
