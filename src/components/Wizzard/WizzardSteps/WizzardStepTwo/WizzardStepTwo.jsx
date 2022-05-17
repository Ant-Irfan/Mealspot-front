import React, { useState } from 'react';
import moment from 'moment';
import func from 'prop-types';
import {
  Form, Radio, Switch, Input, DatePicker,
} from 'antd';
import { ReactComponent as SkinnyHover } from '../../../../images/wizzard/step2/test.svg';
import { ReactComponent as Skinny } from '../../../../images/wizzard/step2/test2.svg';
import { ReactComponent as SkinnyFatHover } from '../../../../images/wizzard/step2/SkinnyFatHover.svg';
import { ReactComponent as SkinnyFat } from '../../../../images/wizzard/step2/SkinnyFat.svg';
import { ReactComponent as FatHover } from '../../../../images/wizzard/step2/fatHover.svg';
import { ReactComponent as Fat } from '../../../../images/wizzard/step2/fat.svg';
import { ReactComponent as AverageHover } from '../../../../images/wizzard/step2/averageHover.svg';
import { ReactComponent as Average } from '../../../../images/wizzard/step2/average.svg';
import styles from './wizzardSteptwo.module.scss';
import stepOneStyles from '../WizzardStepOne/wizzardStepOne.module.scss';

const WizzardStepTwo = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setStepper, stepTwoForm, setWizzardSubmission } = props;
  const [bodyShape, setbodyShape] = useState(null);
  const [isMetric, setisMetric] = useState(true);
  const onFinishStepTwo = (values) => {
    const {
      height,
      weight,
      willingWeight,
      dateOfBirth,
      shape,
    } = values;
    setWizzardSubmission((prevStateVal) => ({
      ...prevStateVal,
      weight_unit: isMetric ? 'metric' : 'imperial',
      height_unit: isMetric ? 'metric' : 'imperial',
      nutrition_unit: isMetric ? 'metric' : 'imperial',
      height_milli_meters: Number(height),
      target_weight_grams: Number(willingWeight),
      weight_grams: Number(weight),
      date_of_birth: moment(dateOfBirth).format('YYYY-MM-DD'),
      body_shape: shape,
    }));
    setStepper(3);
  };

  const onChangeUnits = () => {
    setisMetric(!isMetric);
  };

  const disabledDate = (current) => current && current > moment().endOf('day');

  return (
    <Form
      className="w-100"
      form={stepTwoForm}
      onFinish={onFinishStepTwo}
    >
      <div
        className={`h6 mb-3 ${styles.bodyShapesHeader}`}
      >
        Select one that describes your body shape the best
      </div>
      <div className="wizzard-step2-container">
        <Form.Item
          className="margin-right-antd-override-images"
          name="shape"
          rules={[
            {
              required: true,
              message: 'Please select Body Shape!',
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => setbodyShape(e.target.value)}
            value={bodyShape}
          >
            <Radio.Button
              value="skinny"
              style={{ height: '100%' }}
            >
              <div
                style={{ width: '100%', textAlign: 'center' }}
                className={bodyShape === 'skinny' ? styles.borderSelected : styles.borderNotSelected}
              >
                {bodyShape === 'skinny' ? <SkinnyHover /> : <Skinny /> }
              </div>
              <div>
                <div
                  className={styles.typeTitle}
                >
                  Average Built
                </div>
                <div
                  className={styles.typeDescription}
                >
                  Low muscle mass and low body fat percentage, visible bones.
                </div>
              </div>
            </Radio.Button>

            <Radio.Button
              value="skinny_fat"
              style={{ height: '100%' }}
            >
              <div
                style={{ width: '100%', textAlign: 'center' }}
                className={bodyShape === 'skinny_fat' ? styles.borderSelected : styles.borderNotSelected}
              >
                {bodyShape === 'skinny_fat' ? <SkinnyFatHover /> : <SkinnyFat /> }
              </div>
              <div>
                <div
                  className={styles.typeTitle}
                >
                  Skinny/bony
                </div>
                <div className={styles.typeDescription}>
                  Low muscle mass, noticably higher fat percentage, overall soft/spongy look.
                </div>
              </div>
            </Radio.Button>

            <Radio.Button
              value="average_built"
              style={{ height: '100%' }}
            >
              <div
                style={{ width: '100%', textAlign: 'center' }}
                className={bodyShape === 'average_built' ? styles.borderSelected : styles.borderNotSelected}
              >
                {bodyShape === 'average_built' ? <AverageHover /> : <Average /> }
              </div>
              <div>
                <div className={styles.typeTitle}>
                  Skinny Fat
                </div>
                <div className={styles.typeDescription}>
                  Most common body shape, evident muscle mass coverd by low to mid amount of fat.
                  Abs are hardly or not at all visible.
                </div>
              </div>

            </Radio.Button>

            <Radio.Button
              value="fat"
              style={{ height: '100%' }}
            >
              <div
                style={{ width: '100%', textAlign: 'center' }}
                className={bodyShape === 'fat' ? styles.borderSelected : styles.borderNotSelected}
              >
                {bodyShape === 'fat' ? <FatHover /> : <Fat /> }
              </div>
              <div>
                <div className={styles.typeTitle}>
                  Skinny Fat
                </div>
                <div className={styles.typeDescription}>
                  High amount of body fat, muscles arent noticable
                </div>
              </div>
            </Radio.Button>
          </Radio.Group>
        </Form.Item>
        <div className="mt-5 mb-4 text-center">
          <span
            style={isMetric ? { color: '#152233' } : { color: '#1522334D' }}
            className="mx-3"
          >
            Metric
          </span>
          <Switch onChange={onChangeUnits} />
          <span
            style={!isMetric ? { color: '#152233' } : { color: '#1522334D' }}
            className="mx-3"
          >
            Imperial
          </span>
        </div>
        <div className={`${stepOneStyles.wizzardStepOneFormContainer} my-5`}>
          <div className={stepOneStyles.wizzardStepOneFlexContainer}>
            <div className="w-100">
              <div
                className="mb-1"
              >
                Height
              </div>
              <Form.Item
                className="mb-4"
                name="height"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Height!',
                  },

                ]}
              >
                <Input
                  className={`${styles.loginInputField} px-3 py-2`}
                  placeholder="Height"
                  suffix={isMetric ? 'cm' : 'inch'}
                />
              </Form.Item>
            </div>
            <div className="w-100 margin-right-antd-override">
              <div
                className={`${stepOneStyles.marginRightItems} mb-1`}
              >
                Weight
              </div>
              <Form.Item
                className="mb-4"
                name="weight"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Weight!',
                  },

                ]}
              >
                <Input
                  className={`${styles.loginInputField} ${stepOneStyles.marginRightItems} px-3 py-2`}
                  placeholder="Weight"
                  suffix={isMetric ? 'kg' : 'lbs'}
                />
              </Form.Item>
            </div>
          </div>
          <div className={stepOneStyles.wizzardStepOneFlexContainer}>
            <div className="w-100">
              <div
                className="mb-1"
              >
                Date of Birth
              </div>
              <Form.Item
                className="mb-4"
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: 'Please input Old!',
                  },

                ]}
              >
                <DatePicker
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </div>
            <div className="w-100 margin-right-antd-override">
              <div
                className={`${stepOneStyles.marginRightItems} mb-1`}
              >
                Willing Weight (Optional)
              </div>
              <Form.Item
                className="mb-4"
                name="willingWeight"
              >
                <Input
                  className={`${styles.loginInputField} ${stepOneStyles.marginRightItems} px-3 py-2`}
                  placeholder="Willing Weight"
                  suffix={isMetric ? 'kg' : 'lbs'}
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

WizzardStepTwo.propTypes = {
  setStepper: func.isRequired,
  setWizzardSubmission: func.isRequired,
};

export default WizzardStepTwo;
