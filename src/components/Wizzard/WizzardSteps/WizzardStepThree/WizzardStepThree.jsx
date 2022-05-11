import React, { useState, useEffect } from 'react';
import {
  Alert, Checkbox, Divider, Form,
} from 'antd';
import PropTypes from 'prop-types';
import styles from './wizzardStepThree.module.scss';
import { ReactComponent as Dairy } from '../../../../images/wizzard/step3/dairy.svg';
import { ReactComponent as Meat } from '../../../../images/wizzard/step3/meats.svg';

const WizzardStepThree = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    stepThreeForm, setStepper, setWizzardSubmission, initialWizzardValues,
  } = props;
  const alertDescription = 'Mauris velit quam, dignissim vel ullamcorper vitae, egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum, Mauris velit quam, dignissim vel ullamcorper vitae, ';
  const CheckboxGroup = Checkbox.Group;

  const [meatOptions, setmeatOptions] = useState([]);
  const [diaryOptions, setdiaryOptions] = useState([]);
  const [otherOptions, setotherOptions] = useState([]);

  useEffect(() => {
    if (initialWizzardValues) {
      const { foodstuffs } = initialWizzardValues;
      setmeatOptions(foodstuffs.filter((food) => food.category === 'meats_and_dairy').map((obj) => ({
        label: obj.name,
        value: obj.id,
      })));
      setdiaryOptions(foodstuffs.filter((food) => food.category === 'diary_products').map((obj) => ({
        label: obj.name,
        value: obj.id,
      })));
      setotherOptions(foodstuffs.filter((food) => food.category === 'other').map((obj) => ({
        label: obj.name,
        value: obj.id,
      })));
    }
  }, []);

  /*  MEAT CHECKLIST */
  const [meatCheckedList, setMeatCheckedList] = useState([]);
  const [meatIndeterminate, setMeatIndeterminate] = useState(true);
  const [meatCheckAll, setMeatCheckAll] = useState(false);

  const onChangeMeat = (list) => {
    setMeatCheckedList(list);
    setMeatIndeterminate(!!list.length && list.length < meatOptions.length);
    setMeatCheckAll(list.length === meatOptions.length);
  };

  const onCheckAllMeatChange = (e) => {
    setMeatCheckedList(e.target.checked ? meatOptions.map((obj) => obj.value) : []);
    setMeatIndeterminate(false);
    setMeatCheckAll(e.target.checked);
  };

  /* DAIRY CHECKLIST */
  const [dairyCheckedList, setDairyCheckedList] = useState([]);
  const [dairyIndeterminate, setDairyIndeterminate] = useState(true);
  const [dairyCheckAll, setDairyCheckAll] = useState(false);

  const onChangeDairy = (list) => {
    setDairyCheckedList(list);
    setDairyIndeterminate(!!list.length && list.length < diaryOptions.length);
    setDairyCheckAll(list.length === diaryOptions.length);
  };

  const onCheckAllDairyChange = (e) => {
    setDairyCheckedList(e.target.checked ? diaryOptions.map((obj) => obj.value) : []);
    setDairyIndeterminate(false);
    setDairyCheckAll(e.target.checked);
  };

  /* OTHER CHECKLIST */
  const [otherCheckedList, setOtherCheckedList] = useState([]);
  const [otherIndeterminate, setOtherIndeterminate] = useState(true);
  const [otherCheckAll, setOtherCheckAll] = useState(false);

  const onChangeOther = (list) => {
    setOtherCheckedList(list);
    setOtherIndeterminate(!!list.length && list.length < otherOptions.length);
    setOtherCheckAll(list.length === otherOptions.length);
  };

  const onCheckAllOther = (e) => {
    setOtherCheckedList(e.target.checked ? otherOptions.map((obj) => obj.value) : []);
    setOtherIndeterminate(false);
    setOtherCheckAll(e.target.checked);
  };

  const onFinishStepThree = () => {
    const excludedMeals = meatCheckedList.concat(dairyCheckedList).concat(otherCheckedList);
    setWizzardSubmission((prevStateVal) => ({
      ...prevStateVal,
      excluded_ingredients: excludedMeals,
    }));
    setStepper(4);
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
              options={meatOptions}
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
              options={diaryOptions}
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
              options={otherOptions}
              onChange={onChangeOther}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

const {
  shape, array, func, string,
} = PropTypes;
WizzardStepThree.propTypes = {
  initialWizzardValues: shape({
    email: string.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    foodstuffs: array.isRequired,
    name: string,
    registration_type: string.isRequired,
    token_valid_until: string.isRequired,
  }).isRequired,
  setStepper: func.isRequired,
  setWizzardSubmission: func.isRequired,
};

export default WizzardStepThree;
