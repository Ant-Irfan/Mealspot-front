/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Form, Radio,
} from 'antd';
import { ReactComponent as GymHover } from '../../../../images/wizzard/step4/home_hover.svg';
import { ReactComponent as Home } from '../../../../images/wizzard/step4/home_env.svg';
import { ReactComponent as GymHoverReal } from '../../../../images/wizzard/step4/Group.svg';
import { ReactComponent as Gym } from '../../../../images/wizzard/step4/gym.svg';
import styles from '../WizzardStepTwo/wizzardSteptwo.module.scss';
import stylesStepFour from './wizzardStepFour.module.scss';

const WizzardStepFour = (props) => {
  const { stepFourForm, setWizzardSubmission } = props;
  const [level, setLevel] = useState(null);
  const [environment, setEnvironment] = useState(null);

  const finalRegisterSubmission = () => {
    console.log('heello');
  };

  const onFinishStepFour = (values) => {
    setWizzardSubmission((prevStateVal) => ({
      ...prevStateVal,
      environment: values.environment,
      workout_level: values.level,
    }), () => {
      finalRegisterSubmission();
    });
  };

  const onFinishFailedStepFour = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="w-100"
      form={stepFourForm}
      onFinish={onFinishStepFour}
      onFinishFailed={onFinishFailedStepFour}
    >
      <div className={`${stylesStepFour.wizzardStepFourContainer} wizzard-step4-container`}>
        <Form.Item
          name="environment"
          className="margin-right-antd-override-environment"
          rules={[
            {
              required: true,
              message: 'Please select Environment!',
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => setEnvironment(e.target.value)}
            value={environment}
            className="step4-radio-group-with-images"
          >
            <div className={stylesStepFour.stepFourCardEnvironmentHeading}>Select Environment</div>
            <div
              className={`${stylesStepFour.environmentPadding} step4-card-wrapper`}
            >
              <Radio.Button
                value="gym"
                style={{ height: '100%' }}
              >
                <div
                  style={{ width: '100%', textAlign: 'center', minHeight: 120 }}
                  className={environment === 'gym' ? styles.borderSelected : styles.borderNotSelected}
                >
                  {environment === 'gym' ? <GymHover /> : <Gym /> }
                </div>
                <div>
                  <div
                    className={stylesStepFour.typeTitle}
                  >
                    Home
                  </div>
                  <div
                    className={stylesStepFour.typeDescription}
                  >
                    Little or no equipment, indoor or outdoor. equipment may include pull-up bar,
                    lightweight dumbbells, elastic bands...
                  </div>
                </div>
              </Radio.Button>
              <Radio.Button
                value="home"
                style={{ height: '100%' }}
              >
                <div
                  style={{ width: '100%', textAlign: 'center', minHeight: 120 }}
                  className={environment === 'home' ? styles.borderSelected : styles.borderNotSelected}
                >
                  {environment === 'home' ? <GymHoverReal /> : <Home /> }
                </div>
                <div>
                  <div
                    className={stylesStepFour.typeTitle}
                  >
                    Gym
                  </div>
                  <div
                    className={stylesStepFour.typeDescription}
                  >
                    Training in public or in home/private gym with decent
                    amount of free weights and plates, benches, racks, machines
                  </div>
                </div>
              </Radio.Button>
            </div>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="level"
          className="margin-right-antd-override-level"
          rules={[
            {
              required: true,
              message: 'Please select Level!',
            },
          ]}
        >
          <Radio.Group
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            className="step4-radio-group-without-images"
          >
            <div className={stylesStepFour.stepFourCardHeading}>Select Level</div>
            <div
              className={`${stylesStepFour.levelPadding} step4-card-wrapper`}
              style={{ gap: 20 }}
            >
              <Radio.Button
                value="average"
                style={{ height: '100%' }}
              >
                <div
                  className={stylesStepFour.typeTitle}
                >
                  Beginner
                </div>
                <div className={stylesStepFour.typeDescription}>
                  Very little or no experience in training. Under 6 months of training of any kind.
                  Not able to do a single pull-up, at least 12 push-ups in one set...
                </div>
              </Radio.Button>

              <Radio.Button
                value="fat"
                style={{ height: '100%' }}
              >
                <div
                  className={stylesStepFour.typeTitle}
                >
                  Experienced
                </div>
                <div className={stylesStepFour.typeDescription}>
                  Over 6 months of consistent training. Able to perform at least one proper pull-up
                  and over 12 pull-ups in a single set...
                </div>
              </Radio.Button>
            </div>
          </Radio.Group>
        </Form.Item>
      </div>
    </Form>
  );
};

export default WizzardStepFour;
