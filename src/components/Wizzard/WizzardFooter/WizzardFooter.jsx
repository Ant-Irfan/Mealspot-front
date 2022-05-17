/* eslint-disable react/prop-types */
import React from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import styles from './wizzardFooter.module.scss';

const WizzardFooter = (props) => {
  const {
    setStepper, stepper, stepOneForm, stepTwoForm, stepThreeForm, stepFourForm,
  } = props;
  const checkStepper = () => {
    switch (stepper) {
      case 1:
        stepOneForm.submit();
        break;
      case 2:
        stepTwoForm.submit();
        break;
      case 3:
        stepThreeForm.submit();
        break;
      case 4:
        stepFourForm.submit();
        break;
      default:
        break;
    }
  };
  return (
    <div className={`${styles.wizzardFooterContainer} d-flex justify-content-between`}>
      <button
        onClick={() => setStepper(stepper - 1)}
        type="button"
        style={stepper === 1 ? { visibility: 'hidden' } : { visibility: 'visible' }}
        className={`${styles.backButton} btn btn-light py-2`}
      >
        <ArrowLeftOutlined
          style={{ marginRight: 10 }}
        />
        BACK
      </button>
      <button
        type="button"
        onClick={checkStepper}
        className={`${styles.nextButton} btn btn-light py-2`}
      >
        {
              stepper === 4
                ? (
                  <span>
                    Register
                    <CheckOutlined
                      style={{ marginLeft: 10 }}
                    />
                    <CheckOutlined
                      style={{
                        position: 'relative',
                        marginLeft:'-20px',
                      }}
                    />
                  </span>
                )
                : (
                  <span>
                    NEXT
                    <ArrowRightOutlined
                      style={{ marginLeft: 10 }}
                    />
                  </span>
                )
          }
      </button>
    </div>
  );
};

export default WizzardFooter;
