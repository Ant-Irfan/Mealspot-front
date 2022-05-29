/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { DeleteTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';
import { adminAddFoodstuff } from '../../../../utils/pathsHelper';

const AdminFoodstuffTable = (props) => {
  const { actions, foodstuffs } = props;

  useEffect(() => {
    actions.getFoodstuff();
  }, []);

  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container d-flex justify-content-between">
          <h1
            className={styles.adminPanelHeading}
          >
            Foodstuffs
          </h1>
          <NavLink
            to={adminAddFoodstuff}
          >
            <button
              type="button"
              className="primary-color-button btn btn-light"
              style={{ height: 42 }}
            >
              ADD FOODSTUFF
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
                <th scope="col">Category</th>
                <th scope="col">Protein</th>
                <th scope="col">Carbs</th>
                <th scope="col">Fats</th>
                <th scope="col">Energy</th>
                <th scope="col">Unit</th>
                <th scope="col">Active</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                foodstuffs.map((foodstuff, i) => (
                  <tr>
                    <th scope="row">{i}</th>
                    <td>
                      {foodstuff.name}
                    </td>
                    <td>{foodstuff.description}</td>
                    <td>{foodstuff.category}</td>
                    <td>{foodstuff.protein}</td>
                    <td>{foodstuff.carbs}</td>
                    <td>{foodstuff.fat}</td>
                    <td>{foodstuff.energy}</td>
                    <td>{foodstuff.unit}</td>
                    {
                      foodstuff.active
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
                        onClick={() => actions.deleteFoodstuff(foodstuff.id)}
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
AdminFoodstuffTable.propTypes = {
  actions: shape({
    getFoodstuff: func.isRequired,
    deleteFoodstuff: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  foodstuffs: array.isRequired,
};

export default AdminFoodstuffTable;
