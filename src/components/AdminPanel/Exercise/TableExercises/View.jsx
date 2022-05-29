/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';
import { adminAddExerciseRoute } from '../../../../utils/pathsHelper';

const AdminExercises = (props) => {
  // eslint-disable-next-line react/prop-types
  const { actions, exercises, history } = props;

  useEffect(() => {
    actions.getExercises();
  }, []);

  const toViewExercise = (id) => {
    // eslint-disable-next-line react/prop-types
    history.push(`exercises/${id}`);
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
          <NavLink
            to={adminAddExerciseRoute}
          >
            <button
              type="button"
              className="primary-color-button btn btn-light"
              style={{ height: 42 }}
            >
              ADD EXERCISE
            </button>
          </NavLink>
        </div>
        <div className="container-content">
          <table className="table">
            <thead>
              <tr className="table-secondary">
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Active</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                exercises.map((exercise, i) => (
                  <tr
                    onClick={() => toViewExercise(exercise.id)}
                  >
                    <th scope="row">{i}</th>
                    <td>{exercise.id}</td>
                    <td>
                      {exercise.name}
                    </td>
                    <td>{exercise.description}</td>
                    {
                      exercise.active
                        ? (
                          <td
                            onClick={() => actions.changeIsActiveExercise(exercise, false)}
                            style={{ color: 'green' }}
                          >
                            Active
                          </td>
                        )
                        : (
                          <td
                            onClick={() => actions.changeIsActiveExercise(exercise, true)}
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
                        onClick={() => actions.deleteExercise(exercise.id)}
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
AdminExercises.propTypes = {
  actions: shape({
    getExercises: func.isRequired,
    deleteExercise: func.isRequired,
    changeIsActiveExercise: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  exercises: array.isRequired,
};

export default withRouter(AdminExercises);
