/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { toWords } from 'number-to-words';
import styles from '../progress.module.scss';

const ProgressTable = (props) => {
  const { progress, openModal } = props;

  return (
    <div className="d-flex overflow-auto">
      <div className="">
        <div
          className={styles.progressHeadingTable}
        >
          Body
        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Weight

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Waist

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Chest

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Upper Arm

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Hiph

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Thigh

        </div>
        <div
          style={{ borderRight: '1px solid #EAEAEA' }}
          className={styles.progressItemsTable}
        >
          Calf

        </div>
      </div>
      {
        progress.map((data) => (
          <div className="">
            <div className={styles.progressHeadingTable}>
              Week
              {' '}
              {toWords(data.week)}
            </div>
            <div className={styles.progressItemsTable}>
              {data.weight}
              {' '}
              kg
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_waist}
              {' '}
              cm
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_chests}
              {' '}
              cm
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_upper_arm}
              {' '}
              cm
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_hip}
              {' '}
              cm
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_thigh}
              {' '}
              cm
            </div>
            <div className={styles.progressItemsTable}>
              {data.circumference_calf}
              {' '}
              cm
            </div>
          </div>
        ))
    }
      <div className={styles.noDataprogressItem}>
        <div className={styles.progressHeadingTable}>
          Week
          {' '}

        </div>
        <div
          onClick={openModal}
          className={styles.addButtonContainer}
        >
          <div>
            <PlusOutlined
              className={styles.addWeekSign}
              style={{ fontSize: '20px', color: '#56A2BE' }}
            />
          </div>
          <div className={styles.addWeekHeading}>Add</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTable;
