import React from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import styles from '../../adminPanel.module.scss';
import history from '../../../../history';
import { adminAddExerciseRoute } from '../../../../utils/pathsHelper';

const AdminExercises = () => {
  const toAddExercisePage = () => {
    history.push(adminAddExerciseRoute);
  };
  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Exercises
          </h1>
          <button
            type="button"
            onClick={toAddExercisePage}
            className="primary-color-button btn btn-light"
            style={{ height: 42 }}
          >
            ADD EXERCISE
          </button>
        </div>
        <div className="container-content">
          <table className="table">
            <thead>
              <tr className="table-secondary">
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>123456789</td>
                <td>Name of Exercise</td>
                <td>Description of Exercise</td>
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
                <td>Name of Exercise</td>
                <td>Description of Exercise</td>
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

export default AdminExercises;
