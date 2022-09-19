/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';
import { adminAddMealRoute } from '../../../../utils/pathsHelper';

const AdminMealsTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const { actions, meals, history } = props;

  useEffect(() => {
    actions.getMeals();
  }, []);

  const toViewMeal = (id) => {
    // eslint-disable-next-line react/prop-types
    history.push(`meals/${id}`);
  };
  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Meals
          </h1>
          <NavLink
            to={adminAddMealRoute}
          >
            <button
              type="button"
              className="primary-color-button btn btn-light"
              style={{ height: 42 }}
            >
              ADD MEAL
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
                meals.map((meal, i) => (
                  <tr
                    onClick={() => toViewMeal(meal.id)}
                  >
                    <th scope="row">{i}</th>
                    <td>{meal.id}</td>
                    <td>
                      {meal.name}
                    </td>
                    <td>{meal.description}</td>
                    {
                      meal.active
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
                        onClick={() => actions.deleteMeal(meal.id)}
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
AdminMealsTable.propTypes = {
  actions: shape({
    getMeals: func.isRequired,
    deleteMeal: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  meals: array.isRequired,
};

export default withRouter(AdminMealsTable);
