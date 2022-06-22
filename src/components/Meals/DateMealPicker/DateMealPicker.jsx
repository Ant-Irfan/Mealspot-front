/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { DatePicker, Space } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { ReactComponent as Day } from '../../../images/meals/day.svg';
import { ReactComponent as Week } from '../../../images/meals/week.svg';
import styles from './dateMealPicker.module.scss';

const { RangePicker } = DatePicker;
const DateMealPicker = (props) => {
  const { isWeek, setisWeek } = props;
  const onChange = (date, dateString) => {
    // eslint-disable-next-line no-console
    console.log(date, dateString);
  };
  return (
    <div className={styles.datesContainer}>
      <div className={`${styles.weekOrDateSelector} d-flex align-items-center`}>
        <div className={styles.pickerHeading}>
          Week
        </div>
        <div>
          <LeftOutlined
            className={`${styles.leftAndRightArrows} mx-2`}
          />
          <Space direction="vertical">
            {
                  isWeek
                    ? <RangePicker onChange={onChange} picker="week" />
                    : <DatePicker onChange={onChange} />
              }
          </Space>
          <RightOutlined
            className={`${styles.leftAndRightArrows} mx-2`}
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className={styles.pickerHeading}>
          View by
        </div>
        <div
          style={{ marginRight: 10 }}
          className={isWeek ? `${styles.dayWeekContainerNotSelected}` : `${styles.dayWeekContainerSelected}`}
          onClick={() => setisWeek(false)}
        >
          <Day
            style={{ marginRight: 5 }}
          />
          Day
        </div>
        <div
          onClick={() => setisWeek(true)}
          className={!isWeek ? `${styles.dayWeekContainerNotSelected}` : `${styles.dayWeekContainerSelected}`}
        >
          <Week
            style={{ marginRight: 5 }}
          />
          Week
        </div>
      </div>
    </div>
  );
};

export default DateMealPicker;
