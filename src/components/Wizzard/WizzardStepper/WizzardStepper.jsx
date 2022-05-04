/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { Steps } from 'antd';
import styles from './wizzardStepper.module.scss';

const { Step } = Steps;

const WizzardStepper = ({ widthOfSteps, stepper }) => (

  <div
    style={{ width: '95%', maxWidth: widthOfSteps }}
    className={styles.stepsContainer}
  >
    <Steps
      labelPlacement="vertical"
      current={stepper}
    >
      <Step
        title="Personal"
        status={stepper === 1 ? 'inprocess' : 'finish'}
      />
      <Step
        title="Body"
        status={stepper === 2 ? 'inprocess' : stepper < 2 ? 'waiting' : 'finish'}
      />
      <Step
        title="Meals"
        status={stepper === 3 ? 'inprocess' : stepper < 3 ? 'waiting' : 'finish'}
      />
      <Step
        title="Workout"
        status={stepper === 4 ? 'inprocess' : stepper < 4 ? 'waiting' : 'finish'}
      />
    </Steps>
  </div>
);

export default WizzardStepper;
