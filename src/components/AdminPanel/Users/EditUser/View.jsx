/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Form, Input,
} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';

const AdminSingleUser = (props) => {
  const { actions, user } = props;
  const location = useLocation();
  const [viewUserForm] = Form.useForm();

  useEffect(() => {
    const id = location.pathname.split('/')[3];
    actions.getSingleUser(id);
  }, []);

  useEffect(() => {
    if (user) {
      viewUserForm.setFieldsValue({
        full_name: user.full_name,
        email: user.email,
        date_of_birth: user.date_of_birth,
        plan: user.plan,
        created_at: user.created_at,
        environment: user.environment,
        gender: user.gender,
        height: user.height,
        weight: user.weight,
        target_weight: user.target_weight,
        workout_level: user.workout_level,
        id: user.id,
      });
    }
  }, [user]);

  return (
    <div>
      <div className="container d-flex flex-column h-100">
        <div className="header-container">
          <h1
            className={styles.adminPanelHeading}
          >
            { user && user.full_name }
          </h1>
        </div>
        {
            user
        && (
        <div className="container-content">
          <Form
            form={viewUserForm}
          >
            <div className="col-lg-6 col-xs-12">
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-3"
                >
                  User photo
                </p>
                <img
                  style={{ width: 200, height: 200 }}
                  src={user.profile_photo_url}
                  alt="profile"
                  className="mb-3"
                />
              </div>
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-3"
                >
                  User ID
                </p>
                <Form.Item
                  className="mb-3"
                  name="id"
                  rules={[
                    {
                      required: true,
                      message: 'Please input id of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="ID of user"
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
                    User full name
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="full_name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input name of user!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of user"
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
                    Email
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input email of user!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Email of exercise"
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
                    Date
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="date_of_birth"
                    rules={[
                      {
                        required: true,
                        message: 'Please input date of birth of user!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Date of birth of user"
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
                  Plan
                </p>
                <Form.Item
                  className="mb-3"
                  name="plan"
                  rules={[
                    {
                      required: true,
                      message: 'Please input plan of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Plan of user"
                  />
                </Form.Item>
              </div>
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Created at
                </p>
                <Form.Item
                  className="mb-3"
                  name="created_at"
                  rules={[
                    {
                      required: true,
                      message: 'Please input plan of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Creation date of user"
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
                      message: 'Please input plan of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Environment of user"
                  />
                </Form.Item>
              </div>

              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Gender
                </p>
                <Form.Item
                  className="mb-3"
                  name="gender"
                  rules={[
                    {
                      required: true,
                      message: 'Please input plan of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Gender of user"
                  />
                </Form.Item>
              </div>

              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Height
                </p>
                <Form.Item
                  className="mb-3"
                  name="height"
                  rules={[
                    {
                      required: true,
                      message: 'Please input plan of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Height of user"
                  />
                </Form.Item>
              </div>

              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Weight
                </p>
                <Form.Item
                  className="mb-3"
                  name="weight"
                  rules={[
                    {
                      required: true,
                      message: 'Please input weight of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Weight of user"
                  />
                </Form.Item>
              </div>

              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Target weight
                </p>
                <Form.Item
                  className="mb-3"
                  name="weight"
                  rules={[
                    {
                      required: true,
                      message: 'Please input weight of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Weight of user"
                  />
                </Form.Item>
              </div>

              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Workout level
                </p>
                <Form.Item
                  className="mb-3"
                  name="workout_level"
                  rules={[
                    {
                      required: true,
                      message: 'Please input workout level of user!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Workout level of user"
                  />
                </Form.Item>
              </div>

            </div>
          </Form>
        </div>
        )
        }
      </div>
    </div>
  );
};

export default AdminSingleUser;
