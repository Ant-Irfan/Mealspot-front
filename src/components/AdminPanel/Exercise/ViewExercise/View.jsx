/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input,
} from 'antd';
import { useLocation } from 'react-router-dom';
import styles from '../../adminPanel.module.scss';

const AdminViewExercise = (props) => {
  const { actions, exercise } = props;
  const location = useLocation();
  const [viewExerciseForm] = Form.useForm();

  useEffect(() => {
    console.log('dadada');
    const id = location.pathname.split('/')[3];
    actions.getSingleExercise(id);
  }, []);

  useEffect(() => {
    if (exercise) {
      viewExerciseForm.setFieldsValue({
        name: exercise.name,
        primary_muscle_groups: exercise.primary_muscle_groups,
        secondary_muscle_groups: exercise.secondary_muscle_groups,
        complexity: exercise.complexity,
        female_video_url: exercise.female_video_url,
        male_video_url: exercise.male_video_url,
        description: exercise.description,
        alternate_exercises: exercise.alternate_exercises.map((work) => (
          work.name
        )),
      });
    }
  }, [exercise]);

  return (
    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          { exercise && exercise.name }
        </h1>
      </div>
      <div className="container-content">
        <Form
          form={viewExerciseForm}
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
                    Primarne Misicne grupe
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="primary_muscle_groups"
                    rules={[
                      {
                        required: true,
                        message: 'Please select Primary muslce groups!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Primary muscle groups"
                    />
                  </Form.Item>
                </div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Sekundarne Misicne grupe
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="secondary_muscle_groups"
                    rules={[
                      {
                        required: true,
                        message: 'Please select secondary muscle groups!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Secondary of exercise"
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
                      Kompleksnost
                    </p>
                    <Form.Item
                      className="mb-3"
                      name="complexity"
                      rules={[
                        {
                          required: true,
                          message: 'Please select exercise complexity!',
                        },

                      ]}
                    >
                      <Input
                        className="px-3 py-2"
                        placeholder="Complexity"
                      />
                    </Form.Item>
                    <div
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1"
                      >
                        Male video url
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="male_video_url"
                        rules={[
                          {
                            required: true,
                            message: 'Please input male video url!',
                          },

                        ]}
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Male video url"
                        />
                      </Form.Item>
                    </div>
                    <div
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1"
                      >
                        Female video url
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="female_video_url"
                        rules={[
                          {
                            required: true,
                            message: 'Please input Female video url!',
                          },

                        ]}
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Female video url"
                        />
                      </Form.Item>
                    </div>
                    <div
                      style={{ width: '100%', maxWidth: 500 }}
                    >
                      <p
                        className="mb-1 mt-3"
                      >
                        Opis
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: 'Please input exercise description!',
                          },

                        ]}
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Exercise description"
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
                        Alternativne vjezbe
                      </p>
                      <Form.Item
                        className="mb-3"
                        name="alternate_exercises"
                      >
                        <Input
                          className="px-3 py-2"
                          placeholder="Alternate exercises"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
              {
              exercise
            && (
              <div>
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-3"
                  >
                    Female photo start
                  </p>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={exercise.female_photo_url_start}
                    alt="female-start"
                  />
                </div>
                <div
                  className="mt-4"
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-3"
                  >
                    Female photo end
                  </p>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={exercise.female_photo_url_end}
                    alt="female-end"
                  />
                </div>
                <div
                  className="mt-4"
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-3"
                  >
                    male photo start
                  </p>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={exercise.male_photo_url_start}
                    alt="male-start"
                  />
                </div>
                <div
                  className="mt-4"
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-3"
                  >
                    male photo end
                  </p>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={exercise.male_photo_url_end}
                    alt="male-end"
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
AdminViewExercise.propTypes = {
  actions: shape({
    getSingleExercise: func.isRequired,
  }).isRequired,
};

export default AdminViewExercise;
