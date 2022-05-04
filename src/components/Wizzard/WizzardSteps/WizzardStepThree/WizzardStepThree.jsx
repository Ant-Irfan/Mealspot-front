/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  Alert, Checkbox, Divider, Form,
} from 'antd';
import styles from './wizzardStepThree.module.scss';
import { ReactComponent as Dairy } from '../../../../images/wizzard/step3/dairy.svg';
import { ReactComponent as Meat } from '../../../../images/wizzard/step3/meats.svg';

const WizzardStepThree = (props) => {
  const { stepThreeForm, setStepper, setWizzardSubmission } = props;
  const alertDescription = 'Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum, Mauris velit quam, dignissim vel ullamcorper vitae, ';
  const CheckboxGroup = Checkbox.Group;

  const meatOption = ['Chicken', 'Fish', 'Turkey', 'Beef', 'Pork'];
  const dairyOption = ['Milk', 'Yogurt', 'Low fat cheese', 'High fat cheese', 'Eggs'];
  const otherOption = ['Peanuts', 'Pasta'];

  /*  MEAT CHECKLIST */
  const [meatCheckedList, setMeatCheckedList] = useState([]);
  const [meatIndeterminate, setMeatIndeterminate] = useState(true);
  const [meatCheckAll, setMeatCheckAll] = useState(false);

  const onChangeMeat = (list) => {
    setMeatCheckedList(list);
    setMeatIndeterminate(!!list.length && list.length < meatOption.length);
    setMeatCheckAll(list.length === meatOption.length);
  };

  const onCheckAllMeatChange = (e) => {
    setMeatCheckedList(e.target.checked ? meatOption : []);
    setMeatIndeterminate(false);
    setMeatCheckAll(e.target.checked);
  };

  /* DAIRY CHECKLIST */
  const [dairyCheckedList, setDairyCheckedList] = useState([]);
  const [dairyIndeterminate, setDairyIndeterminate] = useState(true);
  const [dairyCheckAll, setDairyCheckAll] = useState(false);

  const onChangeDairy = (list) => {
    console.log(list);
    setDairyCheckedList(list);
    setDairyIndeterminate(!!list.length && list.length < dairyOption.length);
    setDairyCheckAll(list.length === dairyOption.length);
  };

  const onCheckAllDairyChange = (e) => {
    setDairyCheckedList(e.target.checked ? dairyOption : []);
    setDairyIndeterminate(false);
    setDairyCheckAll(e.target.checked);
  };

  /* OTHER CHECKLIST */
  const [otherCheckedList, setOtherCheckedList] = useState([]);
  const [otherIndeterminate, setOtherIndeterminate] = useState(true);
  const [otherCheckAll, setOtherCheckAll] = useState(false);

  const onChangeOther = (list) => {
    setOtherCheckedList(list);
    setOtherIndeterminate(!!list.length && list.length < otherOption.length);
    setOtherCheckAll(list.length === otherOption.length);
  };

  const onCheckAllOther = (e) => {
    setOtherCheckedList(e.target.checked ? otherOption : []);
    setOtherIndeterminate(false);
    setOtherCheckAll(e.target.checked);
  };

  const onFinishStepThree = () => {
    const excludedMeals = meatCheckedList.concat(dairyCheckedList).concat(otherCheckedList);
    setWizzardSubmission((prevStateVal) => ({
      ...prevStateVal,
      excluded_meals:excludedMeals,
    }));
    setStepper(4);
  };

  const onFinishFailedStepThree = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={`wizzard-step3-container ${styles.alertContainer}`}>
      <Alert
        description={alertDescription}
        type="info"
        showIcon
      />
      <Form
        form={stepThreeForm}
        onFinish={onFinishStepThree}
        onFinishFailed={onFinishFailedStepThree}
      >
        <div className="d-flex flex-wrap mb-3 justify-content-between checkbox-wrapper">
          <div className="mt-3">
            <span className={styles.CheckBoxBackground}>
              <Meat />
            </span>
            <span className={styles.CheckBoxHeader}>
              Meat
            </span>
            <Divider />
            <Checkbox
              indeterminate={meatIndeterminate}
              onChange={onCheckAllMeatChange}
              checked={meatCheckAll}
            >
              Check all
            </Checkbox>
            <CheckboxGroup
              value={meatCheckedList}
              options={meatOption}
              onChange={onChangeMeat}
            />
          </div>
          <div className="mt-3 ">
            <span className={styles.CheckBoxBackground}>
              <Dairy />
            </span>
            <span className={styles.CheckBoxHeader}>
              Dairy
            </span>
            <Divider />
            <Checkbox
              indeterminate={dairyIndeterminate}
              onChange={onCheckAllDairyChange}
              checked={dairyCheckAll}
            >
              Check all
            </Checkbox>
            <CheckboxGroup
              value={dairyCheckedList}
              options={dairyOption}
              onChange={onChangeDairy}
            />
          </div>
          <div className="mt-3">
            <span className={styles.CheckBoxBackground}>
              <Dairy />
            </span>
            <span className={styles.CheckBoxHeader}>
              Other
            </span>
            <Divider />
            <Checkbox
              indeterminate={otherIndeterminate}
              onChange={onCheckAllOther}
              checked={otherCheckAll}
            >
              Check all
            </Checkbox>
            <CheckboxGroup
              value={otherCheckedList}
              options={otherOption}
              onChange={onChangeOther}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default WizzardStepThree;
