import React, { useState } from 'react';
import {
  Form, Input, Select, Upload, Button,
} from 'antd';
import PropTypes from 'prop-types';
import { UploadOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import styles from '../../adminPanel.module.scss';

const { Option } = Select;
const muscleGroupsOptions = [
  <>
    <Option value="chest">Chest</Option>
    <Option value="upper_back">Upper Back</Option>
    <Option value="mid_back">Mid Back</Option>
    <Option value="lower_back">Lower Back</Option>
    <Option value="front_shoulder">Front Shoulder</Option>
    <Option value="rear_shoulder">Rear Shoulder</Option>
    <Option value="mid_shoulder">Mid Shoulder</Option>
    <Option value="triceps">Triceps</Option>
    <Option value="biceps">Biceps</Option>
    <Option value="glutes">Glutes</Option>
    <Option value="quads">Quads</Option>
    <Option value="hamstrings">Hamstring</Option>
    <Option value="calves">Calves</Option>
    <Option value="abs">Abs</Option>
  </>,
];
const complexityOptions = [
  <>
    <Option value="hard">Hard</Option>
    <Option value="medium">Medium</Option>
    <Option value="easy">Easy</Option>
  </>,
];

const alternativeExercises = [
  <Option value="exercise1">Exercise1</Option>,
  <Option value="exercise2">Exercise2</Option>,
];

const AdminAddExercise = (props) => {
  const { actions } = props;
  const [addExerciseForm] = Form.useForm();
  const [richTextEditorValue, setRichTextEditorValue] = useState('');
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onWorkoutDoneForm = (values) => {
    const exerciseToAdd = {
      male_photo_start: values.male_photo_start[0].thumbUrl,
      male_photo_end: values.male_photo_end[0].thumbUrl,
      female_photo_start: values.female_photo_start[0].thumbUrl,
      female_photo_end: values.female_photo_end[0].thumbUrl,
      data: {
        name: values.name,
        complexity: values.complexity,
        description: values.description,
        primary_muscle_groups: values.primary_muscle_groups,
        secondary_muscle_groups: values.secondary_muscle_groups,
        male_video_url: values.male_video_url,
        female_video_url: values.female_video_url,
        alternate_exercises: values.alternate_exercises,
        instructions:richTextEditorValue,
      },
    };
    actions.addExercise(exerciseToAdd);
  };

  return (

    <div className="container d-flex flex-column h-100">
      <div className="header-container">
        <h1
          className={styles.adminPanelHeading}
        >
          Add Exercise
        </h1>
      </div>
      <div className="container-content">
        <Form
          form={addExerciseForm}
          onFinish={onWorkoutDoneForm}
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
                    <Select
                      placeholder="Select primary muscle groups"
                      mode="multiple"
                    >
                      {muscleGroupsOptions}
                    </Select>
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
                    <Select
                      placeholder="Select secondary muscle groups"
                      mode="multiple"
                    >
                      {muscleGroupsOptions}
                    </Select>
                  </Form.Item>
                </div>
                <div style={{ width: '100%', maxWidth: 500 }}>
                  <p
                    className="mb-1"
                  >
                    Uploadaj slike
                  </p>
                  <Form.Item
                    name="male_photo_start"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Male Photo Start"
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                </div>
                <div style={{ width: '100%', maxWidth: 500 }}>
                  <Form.Item
                    name="male_photo_end"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Male Photo End"
                  >
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                  </Form.Item>
                  <div style={{ width: '100%', maxWidth: 500 }}>
                    <Form.Item
                      name="female_photo_start"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      extra="Female Photo Start"
                    >
                      <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                      </Upload>
                    </Form.Item>
                  </div>
                  <div style={{ width: '100%', maxWidth: 500 }}>
                    <Form.Item
                      name="female_photo_end"
                      valuePropName="fileList"
                      getValueFromEvent={normFile}
                      extra="Female Photo Start"
                    >
                      <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                      </Upload>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-12">
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
                    <Select
                      placeholder="Select complexity"
                    >
                      {complexityOptions}
                    </Select>
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
                          message: 'Please input video url for female!',
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
                      className="mb-1"
                    >
                      Instructions
                    </p>
                    <ReactQuill
                      theme="snow"
                      value={richTextEditorValue}
                      onChange={setRichTextEditorValue}
                    />
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
                      rules={[
                        {
                          required: true,
                          message: 'Please select alternative exerices!',
                        },

                      ]}
                    >
                      <Select
                        mode="multiple"
                        placeholder="Select alternative exercises"
                      >
                        {alternativeExercises}
                      </Select>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
      <div className="footer mt-auto">
        <div>
          <button
            type="button"
            onClick={() => addExerciseForm.submit()}
            className="primary-color-button btn btn-light"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const { shape, func } = PropTypes;
AdminAddExercise.propTypes = {
  actions: shape({
    addExercise: func.isRequired,
  }).isRequired,
};

export default AdminAddExercise;
