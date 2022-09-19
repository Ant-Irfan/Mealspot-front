/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  Form, Input, Select, Upload, Button,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;
const planOption = [
  <>
    <Option value="free">Free</Option>
    <Option value="premium">Premium</Option>
  </>,
];
const timingOption = [
  <>
    <Option value="breakfast">Breakfast</Option>
    <Option value="lunch">Lunch</Option>
    <Option value="dinner">Dinner</Option>
  </>,
];

const AddMeal = (props) => {
  const { actions, foodstuffs } = props;
  const [addMealForm] = Form.useForm();

  useEffect(() => {
    if (foodstuffs.length === 0) {
      actions.getFoodstuff();
    }
  }, []);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onMealDoneForm = (values) => {
    const ingredientToAdd = values.ingredients.map((ingredient) => ({
      foodstuff_id: ingredient, unit_value: 1,
    }));
    const exerciseToAdd = {
      photo: values.photo[0].originFileObj,
      data: {
        name: values.name,
        timings: values.timings,
        description: values.description,
        plan: values.plan,
        preparation_instructions: values.preparation_instructions,
        preparation_time: values.preparation_time,
        ingredients: ingredientToAdd,
        active: true,
      },
    };
    actions.addMeal(exerciseToAdd);
  };

  return (
    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          Add Meal
        </h1>
      </div>
      <div className="container-content">
        <Form
          form={addMealForm}
          onFinish={onMealDoneForm}
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
                        message: 'Please input name of meal!',
                      },

                    ]}
                  >
                    <Input
                      className="px-3 py-2"
                      placeholder="Name of meal"
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
                  Meal Timing
                </p>
                <Form.Item
                  className="mb-3"
                  name="timings"
                  rules={[
                    {
                      required: true,
                      message: 'Please select Time of meal!',
                    },

                  ]}
                >
                  <Select
                    placeholder="Select time of meal"
                    mode="multiple"
                  >
                    {timingOption}
                  </Select>
                </Form.Item>
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
                      message: 'Please select type of plan!',
                    },

                  ]}
                >
                  <Select
                    placeholder="Select type of plan"
                  >
                    {planOption}
                  </Select>
                </Form.Item>
              </div>
              <div
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Preparation time
                </p>
                <Form.Item
                  className="mb-3"
                  name="preparation_time"
                  rules={[
                    {
                      required: true,
                      message: 'Please input time for preparatin!',
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
                style={{ width: '100%', maxWidth: 500 }}
              >
                <p
                  className="mb-1"
                >
                  Instructions
                </p>
                <Form.Item
                  className="mb-3"
                  name="preparation_instructions"
                  rules={[
                    {
                      required: true,
                      message: 'Please input preparation instructions!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Instructions"
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
                      message: 'Please input Meal description!',
                    },

                  ]}
                >
                  <Input
                    className="px-3 py-2"
                    placeholder="Description"
                  />
                </Form.Item>
              </div>
              <div style={{ width: '100%', maxWidth: 500 }}>
                <p
                  className="mb-1"
                >
                  Meal Photo Upload
                </p>
                <Form.Item
                  name="photo"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="Meal Photo"
                >
                  <Upload
                    name="logo"
                    action="/upload.do"
                    listType="picture"
                    beforeUpload={() => false}
                  >
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
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
                <Form.Item
                  className="mb-3"
                  name="ingredients"
                  rules={[
                    {
                      required: true,
                      message: 'Please select ingredients!',
                    },

                  ]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Select ingredients for meal"
                  >
                    {
                          foodstuffs.map((foodstuff) => (
                            <Option value={foodstuff.id}>{foodstuff.name}</Option>
                          ))
                        }
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className="footer mt-auto">
        <div>
          <button
            type="button"
            onClick={() => addMealForm.submit()}
            className="primary-color-button btn btn-light"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddMeal;
