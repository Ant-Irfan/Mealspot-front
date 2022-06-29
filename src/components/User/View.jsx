/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Form, Input, Upload,
} from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import headerStyles from '../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import styles from './user.module.scss';

const UserProfile = ({ user, actions }) => {
  const [accountForm] = Form.useForm();
  const onAccountDone = (values) => {
    const oldPassword = values.old_password;
    const newPassword = values.password;
    actions.changePassword(oldPassword, newPassword);
  };
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line no-console
      console.log(user);
      accountForm.setFieldsValue({
        fullName: user.full_name,
        email: user.email,
        password: user.password,
      });
    }
  }, [user]);

  const submitUserProfile = () => {
    accountForm.submit();
  };

  return (
    <div className={`${styles.userContainer} container`}>
      <div className={headerStyles.wizzardHeaderContainer}>
        <h1
          className={headerStyles.wizzardHeaderHeading}
        >
          Account
        </h1>
        <div
          className={headerStyles.wizzardHeaderDescription}
        >
          Mauris velit quam, dignissim vel ullamcorper vitae,
          egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
        </div>
      </div>
      <div className="mt-4">
        <div className="container-content">
          <div>
            <Form
              form={accountForm}
              onFinish={onAccountDone}
            >
              <div className="row">
                <div className="col-lg-6 col-xs-12">
                  <div className={styles.formSubHeading}>
                    INFO
                  </div>
                  <div
                    className="mt-4"
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      className="avatar-uploader"
                      showUploadList={false}
                    >
                      <CameraOutlined />
                    </Upload>
                  </div>
                  <div
                    className="mt-4"
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Full Name
                    </p>
                    <Form.Item
                      className="mb-3"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Full Name!',
                        },

                      ]}
                    >
                      <Input
                        className="px-3 py-2"
                        placeholder="Full Name"
                      />
                    </Form.Item>
                  </div>
                  <div
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Email Address
                    </p>
                    <Form.Item
                      className="mb-3"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please input email address',
                        },

                      ]}
                    >
                      <Input
                        className="px-3 py-2"
                        placeholder="Email Address"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                  <div
                    style={{ maxWidth: 500 }}
                    className="d-flex flex-wrap justify-content-between"
                  >
                    <div className={styles.formSubHeading}>PASSWORD</div>
                    <div className={styles.formLink}>Forgot Password?</div>
                  </div>
                  <div
                    className="mt-4"
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Old Password
                    </p>
                    <Form.Item
                      className="mb-4"
                      name="old_password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Old Password!',
                        },
                        { min: 6, message: 'Password must be minimum 6 characters.' },
                      ]}
                    >
                      <Input.Password
                        className="px-3 py-2"
                        placeholder="Password"
                      />
                    </Form.Item>
                  </div>
                  <div
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Password
                    </p>
                    <Form.Item
                      className="mb-4"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your New Password!',
                        },
                        { min: 6, message: 'Password must be minimum 6 characters.' },
                      ]}
                    >
                      <Input.Password
                        className="px-3 py-2"
                        placeholder="Password"
                      />
                    </Form.Item>
                  </div>
                  <div
                    style={{ width: '100%', maxWidth: 500 }}
                  >
                    <p
                      className="mb-1"
                    >
                      Confirm Password
                    </p>
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
                        className=" px-3 py-2"
                        placeholder="Confirm Password"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <div className={`${styles.userFooterContainer} d-flex flex-wrap justify-content-between`}>
          <button
            type="button"
            onClick={submitUserProfile}
            className={`${styles.saveButton} btn btn-light py-2`}
          >
            SAVE
          </button>
          <button
            type="button"
            className={`${styles.deleteButton} btn btn-light py-2`}
          >
            DELETE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
