import React, { useEffect } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from '../../adminPanel.module.scss';
import history from '../../../../history';
import { adminTrainingRoute } from '../../../../utils/pathsHelper';

const AdminTrainingTable = (props) => {
  const { actions, workouts } = props;

  useEffect(() => {
    actions.getWorkouts();
  }, []);

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
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Training time</th>
                <th scope="col">Active</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                workouts.map((workout, i) => (
                  <tr>
                    <th scope="row">{i}</th>
                    <td>{workout.name}</td>
                    <td>{workout.description}</td>
                    <td>{workout.training_time}</td>
                    {
                      workout.active
                        ? (
                          <td
                            style={{ color: 'green' }}
                          >
                            Active
                          </td>
                        )
                        : (
                          <td
                            style={{ color: 'red' }}
                          >
                            Not Active
                          </td>
                        )
                    }
                    <td>
                      <DeleteTwoTone
                        twoToneColor="#D11A2A"
                        style={{ fontSize: 20, marginLeft: 15 }}
                        onClick={() => actions.deleteWorkout(workout.id)}
                      />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const { shape, func, array } = PropTypes;
AdminTrainingTable.propTypes = {
  actions: shape({
    getExercises: func.isRequired,
    deleteWorkout: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  workouts: array.isRequired,
};

export default AdminTrainingTable;