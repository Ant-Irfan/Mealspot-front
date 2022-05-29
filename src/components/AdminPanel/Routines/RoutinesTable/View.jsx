/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';
import { adminAddRoutineRoute } from '../../../../utils/pathsHelper';

const AdminRoutinesTable = (props) => {
  const { actions, routines, history } = props;

  useEffect(() => {
    actions.getTrainingRoutines();
  }, []);

  const toViewRoutine = (id) => {
    history.push(`routines/${id}`);
  };
  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Training Routines Table
          </h1>
          <NavLink
            to={adminAddRoutineRoute}
          >
            <button
              type="button"
              className="primary-color-button btn btn-light"
              style={{ height: 42 }}
            >
              ADD ROUTINE
            </button>
          </NavLink>
        </div>
        <div className="container-content">
          <table className="table">
            <thead>
              <tr className="table-secondary">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Level</th>
                <th scope="col">Environment</th>
                <th scope="col">Active</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                routines.map((routine, i) => (
                  <tr
                    onClick={() => toViewRoutine(routine.id)}
                  >
                    <th scope="row">{i}</th>
                    <td>{routine.name}</td>
                    <td>{routine.description}</td>
                    <td>{routine.level}</td>
                    <td>{routine.environment}</td>
                    {
                      routine.active
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
                        onClick={() => actions.deleteRoutine(routine.id)}
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
AdminRoutinesTable.propTypes = {
  actions: shape({
    getTrainingRoutines: func.isRequired,
    deleteRoutine: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  routines: array.isRequired,
};

export default withRouter(AdminRoutinesTable);
