/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { Form, Input, Radio } from 'antd';
import { ReactComponent as Male } from '../../../../images/wizzard/step1/male.svg';
import { ReactComponent as Female } from '../../../../images/wizzard/step1/female.svg';
import styles from '../../wizzard.module.scss';
import stepOneStyles from './wizzardStepOne.module.scss';

const WizzardStepOne = (props) => {
  const {
    setStepper, stepOneForm, setWizzardSubmission,
  } = props;
  const onFinishStepOne = (values) => {
    const {
      email,
      fullName,
      gender,
      password,
    } = values;
    setWizzardSubmission((prevStateVal) => ({
      ...prevStateVal,
      full_name: fullName,
      email,
      gender,
      password,
    }));
    setStepper(2);
  };

  const onFinishFailedStepOne = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      className={`${stepOneStyles.wizzardStepOneFormContainer} w-100`}
      form={stepOneForm}
      onFinish={onFinishStepOne}
      onFinishFailed={onFinishFailedStepOne}
    >
      <div className={stepOneStyles.wizzardStepOneFlexContainer}>
        <div className="w-100">
          <div
            className="mb-1"
          >
            Full name
          </div>
          <Form.Item
            className="mb-4"
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Please input Full Name!',
              },

            ]}
          >
            <Input
              className={`${styles.loginInputField} px-3 py-2`}
              placeholder="Name & Surname"
            />
          </Form.Item>
        </div>
        <div className="w-100 margin-right-antd-override">
          <div
            className={`${stepOneStyles.marginRightItems} mb-1`}
          >
            Email Address
          </div>
          <Form.Item
            className="mb-4"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'Please input valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },

            ]}
          >
            <Input
              className={`${styles.loginInputField} ${stepOneStyles.marginRightItems} px-3 py-2`}
              placeholder="Email"
            />
          </Form.Item>
        </div>
      </div>
      <div className={stepOneStyles.wizzardStepOneFlexContainer}>
        <div className="w-100">
          <div
            className="mb-1"
          >
            Password
          </div>
          <Form.Item
            className="mb-4"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              className={`${styles.loginInputField} px-3 py-2`}
              placeholder="Password"
            />
          </Form.Item>
        </div>
        <div className="w-100 margin-right-antd-override">
          <div
            className={`${stepOneStyles.marginRightItems} mb-1`}
          >
            Confirm Password
          </div>
          <Form.Item
            className="mb-4"
            name="passwordConfirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Password that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              className={`${styles.loginInputField} ${stepOneStyles.marginRightItems} px-3 py-2`}
              placeholder="Confirm Password"
            />
          </Form.Item>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-100">
          <div
            className="mb-1"
          >
            Gender
          </div>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: 'Please select gender!' }]}
          >
            <Radio.Group style={{ display: 'flex' }}>
              <Radio.Button
                style={{
                  width: 105,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 15,
                }}
                value="male"
              >
                <Male
                  style={{ marginRight: 5 }}
                />
                Male
              </Radio.Button>
              <Radio.Button
                style={{
                  width: 105,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                value="female"
              >
                <Female
                  style={{ marginRight: 5 }}
                />
                Female
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default WizzardStepOne;
