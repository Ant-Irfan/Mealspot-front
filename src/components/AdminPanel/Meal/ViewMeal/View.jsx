/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';

const AdminViewMeal = (props) => {
  const { actions, meal } = props;
  const location = useLocation();
  const [viewMealForm] = Form.useForm();

  useEffect(() => {
    const id = location.pathname.split('/')[3];
    actions.getSingleMeal(id);
  }, []);

  useEffect(() => {
    if (meal) {
      viewMealForm.setFieldsValue({
        photo: meal.photo_url,
        name: meal.name,
        timings: meal.timings,
        description: meal.description,
        plan: meal.plan,
        preparation_instructions: meal.preparation_instructions,
        preparation_time: meal.preparation_time,
        ingredients: meal.ingredients,
      });
    }
  }, [meal]);

  return (
    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          { meal && meal.name }
        </h1>
      </div>
      <div className="container-content">
        <Form
          form={viewMealForm}
        >
          <div className="row">
            <div className="col-lg-6 col-xs-12">
              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Name
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name of Meal!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of meal"
                    />
                  </Form.Item>
                </div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Description
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="description"
                    rules={[
                      {
                        required: true,
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Description of meal"
                    />
                  </Form.Item>
                </div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Timings
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="timings"
                    rules={[
                      {
                        required: true,
                        message: 'Please select secondary muscle groups!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Timings of meal"
                    />
                  </Form.Item>
                </div>
                <div>
                  <div
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Plan
                    </p>
                    <Form.Item
                      className="mb-3"
                      name="plan"
                      rules={[
                        {
                          required: true,
                          message: 'Plan',
                        },

                      ]}
                    >
                      <Input
                        className="px-3 py-2"
                        placeholder="Plan"
                      />
                    </Form.Item>
                    <div
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1"
                      >
                        Preparation Instructions
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="preparation_instructions"
                        rules={[
                          {
                            required: true,
                            message: 'Please input preparation',
                          },

                        ]}
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Preparation Instructions"
                        />
                      </Form.Item>
                    </div>
                    <div
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1"
                      >
                        Preparation Time
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="preparation_time"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Preparation time',
                          },

                        ]}
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Preparation time"
                        />
                      </Form.Item>
                    </div>
                    <div
                      className="mt-3"
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1"
                      >
                        Ingredients
                      </p>
                      {
                        meal
                        && meal.ingredients.map((ingredient) => (
                          <div style={{ marginBottom: 10 }}>
                            <div>
                              Name:
                              {' '}
                              {ingredient.foodstuff.name}
                            </div>
                            <div>
                              Unit:
                              {' '}
                              {ingredient.display_unit}
                            </div>
                            <div>
                              Category:
                              {' '}
                              {ingredient.foodstuff.category}
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              {
              meal
            && (
              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-3"
                  >
                    Photo
                  </p>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={meal.photo_url}
                    alt="meal"
                  />
                </div>
              </div>
            )
            }
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
AdminViewMeal.propTypes = {
  actions: shape({
    getSingleMeal: func.isRequired,
  }).isRequired,
};

export default AdminViewMeal;
