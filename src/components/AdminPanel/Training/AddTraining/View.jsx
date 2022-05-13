import React from 'react';
import {
  Form, Input, Select,
} from 'antd';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;

const AdminTraining = () => {
  const [addTrainingForm] = Form.useForm();
  const onWorkoutDoneForm = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
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
            {/*  <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Nivo
              </p>
              <Form.Item
                className="mb-3"
                name="level"
                rules={[
                  {
                    required: true,
                    message: 'Please select level of workout!',
                  },

                ]}
              >
                <Select
                  placeholder="Select level of workout"
                >
                  <Option value="beginner">Beginner</Option>
                  <Option value="experienced">Experienced</Option>
                </Select>
              </Form.Item>
            </div> */}
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
                name="name"
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
            {/* <div
              style={{ width: '100%', maxWidth: 500 }}
            >
              <p
                className="mb-1"
              >
                Flag
              </p>
              <Form.Item
                className="mb-3"
                name="flag"
                rules={[
                  {
                    required: true,
                    message: 'Please Select Flag!',
                  },

                ]}
              >
                <Select
                  placeholder="Select level of workout"
                >
                  <Option value="home">Home</Option>
                  <Option value="gym">Gym</Option>
                </Select>
              </Form.Item>
            </div> */}
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
                name="flag"
                rules={[
                  {
                    required: true,
                    message: 'Please Select Flag!',
                  },

                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select exercises for workout"
                >
                  <Option value="home">exercise 1</Option>
                  <Option value="gym">exercise 2</Option>
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

export default AdminTraining;
