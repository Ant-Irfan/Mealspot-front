/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';

const AdminViewWorkout = (props) => {
  const { actions, workout } = props;
  const location = useLocation();
  const [viewWorkoutForm] = Form.useForm();

  useEffect(() => {
    const id = location.pathname.split('/')[3];
    actions.getSingleWorkout(id);
  }, []);

  useEffect(() => {
    if (workout) {
      viewWorkoutForm.setFieldsValue({
        name: workout.name,
        description: workout.description,
        exercises:  workout.exercises.map((work) => (
          work.name
        )),
        training_time: workout.training_time,
      });
    }
  }, [workout]);

  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container">
          <h1
            className={styles.adminPanelHeading}
          >
            { workout && workout.name }
          </h1>
        </div>
        <div className="container-content">
          <Form
            form={viewWorkoutForm}
          >
            <div className="col-lg-6 col-xs-12">
              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Ime
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name of exercise!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of exercise"
                    />
                  </Form.Item>
                </div>
              </div>
              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Opis
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name of exercise!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of exercise"
                    />
                  </Form.Item>
                </div>
              </div>

              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Trajanje treninga
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="training_time"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name of exercise!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of exercise"
                    />
                  </Form.Item>
                </div>
              </div>
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Vjezbe
                </p>
                <Form.Item
                  className="mb-3"
                  name="exercises"
                  rules={[
                    {
                      required: true,
                      message: 'Please input name of exercise!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Name of exercise"
                  />
                </Form.Item>
              </div>

            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
AdminViewWorkout.propTypes = {
  actions: shape({
    getSingleWorkout: func.isRequired,
  }).isRequired,
};

export default AdminViewWorkout;
