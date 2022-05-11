import React, { useRef, useState, useEffect } from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import WizzardHeader from './WizzardHeader/WizzardHeader';
import WizzardStepper from './WizzardStepper/WizzardStepper';
import WizzardFooter from './WizzardFooter/WizzardFooter';
import WizzardStepOne from './WizzardSteps/WizzardStepOne/WizzardStepOne';
import WizzardStepTwo from './WizzardSteps/WizzardStepTwo/WizzardStepTwo';
import WizzardStepThree from './WizzardSteps/WizzardStepThree/WizzardStepThree';
import WizzardStepFour from './WizzardSteps/WizzardStepFour/WizzardStepFour';
import styles from './wizzard.module.scss';

const Wizzard = (props) => {
  const {
    actions,
    initialWizzardValues,
    wizzardEnabled,
  } = props;

  const headerRef = useRef(null);
  const mainContent = useRef(null);
  const [titleWidth, settitleWidth] = useState(null);
  const [mainContentWidth, setMainContentWidth] = useState();
  const [stepper, setStepper] = useState(1);
  const [stepOneForm] = Form.useForm();
  const [stepTwoForm] = Form.useForm();
  const [stepThreeForm] = Form.useForm();
  const [stepFourForm] = Form.useForm();

  const [wizzardSubmission, setWizzardSubmission] = useState({
    full_name: null,
    email: null,
    password: null,
    token: null,
    gender: null,
    body_shape: null,
    weight_unit: 'metric',
    height_unit: 'metric',
    nutrition_unit: 'metric',
    weight_grams: null,
    target_weight_grams: null,
    height_milli_meters: null,
    date_of_birth: null,
    excluded_ingredients: [],
    environment: null,
    workout_level: null,
  });

  const handleResize = () => {
    setMainContentWidth(mainContent.current
      ? (mainContent.current.offsetWidth - (2 * titleWidth)) : 0);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
  }, []);

  useEffect(() => {
    if (initialWizzardValues) {
      stepOneForm.setFieldsValue({
        email: initialWizzardValues.email,
        fullName: initialWizzardValues.name,
      });
    }
  }, [initialWizzardValues]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.split('/')[2]) {
      actions.registrationEmailConfirmation(location.pathname.split('/')[2]);
    }
  }, [location]);

  return (
    <div>
      {
      wizzardEnabled
      && (
      <div className={`${styles.wizzardContainer} container`}>
        <div
          ref={headerRef}
        >
          <WizzardHeader
            titleWidth={titleWidth}
            settitleWidth={settitleWidth}
          />
        </div>
        <div>
          <div className={`${styles.wizzardStepperWrapper} d-flex my-4`}>
            <div
              className={styles.allignWithHeaderTitle}
              style={{ width: titleWidth }}
            />
            <WizzardStepper
              stepper={stepper}
              widthOfSteps={mainContentWidth}
            />
            <div
              className={styles.allignWithHeaderTitle}
              style={{ width: titleWidth }}
            />
          </div>
          <div
            ref={mainContent}
            className="d-flex mt-4"
          >
            <div
              className={styles.allignWithHeaderTitle}
              style={{ width: titleWidth }}
            />
            <div
              style={{ width: '100%', maxWidth: mainContentWidth }}
            >
              {
              stepper === 1
              && (
              <WizzardStepOne
                stepOneForm={stepOneForm}
                setStepper={setStepper}
                setWizzardSubmission={setWizzardSubmission}
                wizzardSubmission={wizzardSubmission}
                initialWizzardValues={initialWizzardValues}
              />
              )
            }
              {
              stepper === 2
              && (
              <WizzardStepTwo
                stepTwoForm={stepTwoForm}
                setStepper={setStepper}
                setWizzardSubmission={setWizzardSubmission}
              />
              )
            }
              {
              stepper === 3 && (
                <WizzardStepThree
                  stepThreeForm={stepThreeForm}
                  setStepper={setStepper}
                  setWizzardSubmission={setWizzardSubmission}
                  initialWizzardValues={initialWizzardValues}
                />
              )
            }
              {
              stepper === 4 && (
                <WizzardStepFour
                  stepFourForm={stepFourForm}
                  setStepper={setStepper}
                  setWizzardSubmission={setWizzardSubmission}
                  wizzardSubmission={wizzardSubmission}
                  actions={actions}
                />
              )
            }
            </div>
            <div
              style={{ width: titleWidth }}
              className={styles.allignWithHeaderTitle}
            />
          </div>
        </div>
        <div className="mt-auto">
          <WizzardFooter
            stepper={stepper}
            stepOneForm={stepOneForm}
            stepTwoForm={stepTwoForm}
            stepThreeForm={stepThreeForm}
            stepFourForm={stepFourForm}
            setStepper={setStepper}
            wizzardSubmission={wizzardSubmission}
            setWizzardSubmission={setWizzardSubmission}
          />
        </div>
      </div>
      )
      }
    </div>
  );
};

const {
  shape, func, bool, array, string,
} = PropTypes;
Wizzard.propTypes = {
  actions: shape({
    registrationEmailConfirmation: func.isRequired,
  }).isRequired,
  initialWizzardValues: shape({
    email: string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    foodstuffs: array.isRequired,
    name: string,
    registration_type: string.isRequired,
    token_valid_until: string.isRequired,
  }).isRequired,
  wizzardEnabled: bool.isRequired,
};

export default Wizzard;
