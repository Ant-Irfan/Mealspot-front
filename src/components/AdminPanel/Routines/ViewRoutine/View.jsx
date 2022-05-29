/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';

const AdminViewRoutine = (props) => {
  const { actions, routine } = props;
  const location = useLocation();
  const [viewRoutineForm] = Form.useForm();

  useEffect(() => {
    const id = location.pathname.split('/')[3];
    actions.getSingleTrainingRoutine(id);
  }, []);

  useEffect(() => {
    if (routine) {
      viewRoutineForm.setFieldsValue({
        name: routine.name,
        level: routine.level,
        environment: routine.environment,
        description: routine.description,
      });
    }
  }, [routine]);

  return (
    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          { routine && routine.name }
        </h1>
      </div>
      <div className="container-content">
        <Form
          form={viewRoutineForm}
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
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Environment
                </p>
                <Form.Item
                  className="mb-3"
                  name="environment"
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
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Level
                </p>
                <Form.Item
                  className="mb-3"
                  name="level"
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
              {
                routine
                // eslint-disable-next-line no-unused-vars
                && Object.entries(routine.trainings).map(([key, value]) => (

                  <div
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      {key}
                    </p>
                    <Form.Item
                      className="mb-3"
                      name="trainings"
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
                        defaultValue={value && value.name ? value.name : ''}
                      />
                    </Form.Item>
                  </div>
                ))
              }
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
AdminViewRoutine.propTypes = {
  actions: shape({
    getSingleTrainingRoutine: func.isRequired,
  }).isRequired,
};

export default AdminViewRoutine;
