import React, { useEffect } from 'react';
import {
  Form, Input, Select,
} from 'antd';
import PropTypes from 'prop-types';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;

const AdminTraining = (props) => {
  const { actions, exercises } = props;
  const [addTrainingForm] = Form.useForm();

  useEffect(() => {
    actions.getExercises();
  }, []);

  const onWorkoutDoneForm = (values) => {
    const workout = {
      name: values.name,
      description: values.description,
      exercises: values.exercises,
      training_time: values.training_time,
      active: true,
    };
    actions.addWorkouts(workout);
  };

  return (

    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          Workout
        </h1>
      </div>
      <div className="container-content">
        <div>
          <Form
            form={addTrainingForm}
            onFinish={onWorkoutDoneForm}
          >
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
                    message: 'Please input name of workout!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Name of workout"
                />
              </Form.Item>
            </div>
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
                    message: 'Please input description of workout!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Description of workout"
                />
              </Form.Item>
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
                    message: 'Please Select Exercises!',
                  },

                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select alternative exercises"
                >
                  {
                    exercises.map((exercise) => (
                      <Option value={exercise.id}>{exercise.name}</Option>
                    ))
                  }
                </Select>
              </Form.Item>
            </div>
            <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Trajanje
              </p>
              <Form.Item
                className="mb-3"
                name="training_time"
                rules={[
                  {
                    required: true,
                    message: 'Please input duration of workout!',
                  },

                ]}
              >
                <Input
                  className="px-3 py-2"
                  placeholder="Duration of workout"
                />
              </Form.Item>
            </div>

          </Form>
        </div>
      </div>
      <div className="footer mt-auto">
        <div>
          <button
            type="button"
            onClick={() => addTrainingForm.submit()}
            className="primary-color-button btn btn-light"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const { shape, func, array } = PropTypes;
AdminTraining.propTypes = {
  actions: shape({
    addWorkouts: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  exercises: array.isRequired,
};

export default AdminTraining;
