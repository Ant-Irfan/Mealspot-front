import React, { useEffect } from 'react';
import {
  Form, Input, Select,
} from 'antd';
import PropTypes from 'prop-types';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;

const environmentOptions = [
  <>
    <Option value="home">Home</Option>
    <Option value="gym">Gym</Option>
  </>,
];

const levelOptions = [
  <>
    <Option value="beginner">Beginner</Option>
    <Option value="experienced">Experienced</Option>
  </>,
];

const AdminAddRoutine = (props) => {
  const { actions, workouts } = props;
  const [addRoutineForm] = Form.useForm();

  useEffect(() => {
    actions.getWorkouts();
  }, []);

  const onRoutineDoneForm = (values) => {
    const trainingRoutine = {
      name: values.name,
      description: values.description,
      level: values.level,
      environment: values.environment,
      active: true,
      trainings: {
        day1: values.day1,
        day2: values.day2,
        day3: values.day3,
        day4: values.day4,
        day5: values.day5,
        day6: values.day6,
        day7: values.day7,
      },
    };
    actions.addTrainingRoutine(trainingRoutine);
  };
  return (
    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          Training Routine
        </h1>
      </div>
      <div className="container-content">
        <div>
          <Form
            form={addRoutineForm}
            onFinish={onRoutineDoneForm}
          >
            <div className="row">
              <div className="col-lg-6 col-xs-12">
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
                        message: 'Please input name of routine!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of training routine"
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
                    name="descripton"
                    rules={[
                      {
                        required: true,
                        message: 'Please input description of routine!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Description of training routine"
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
                        message: 'Please input environment of routine!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select environment"
                    >
                      {environmentOptions}
                    </Select>
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
                        message: 'Please input level of workout!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select Level"
                    >
                      {levelOptions}
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <div className="col-lg-6 col-xs-12">
                <div
                  style={{ width: '100%', maxWidth: 500 }}
                >
                  <p
                    className="mb-1"
                  >
                    Day 1
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day1"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 1!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 2
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day2"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 2!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 3
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day3"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 3!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 4
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day4"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 4!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 5
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day5"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 5!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 6
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day6"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 6!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
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
                    Day 7
                  </p>
                  <Form.Item
                    className="mb-3"
                    name="day7"
                    rules={[
                      {
                        required: true,
                        message: 'Please input workout for day 7!',
                      },

                    ]}
                  >
                    <Select
                      placeholder="Select workout"
                    >
                      {
                      workouts.map((workout) => (
                        <Option value={workout.id}>{workout.name}</Option>
                      ))
                    }
                    </Select>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="footer mt-auto">
        <div>
          <button
            type="button"
            onClick={() => addRoutineForm.submit()}
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
AdminAddRoutine.propTypes = {
  actions: shape({
    getWorkouts: func.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  workouts: array.isRequired,
};

export default AdminAddRoutine;
