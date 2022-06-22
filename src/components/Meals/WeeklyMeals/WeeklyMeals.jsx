import React from 'react';
import styles from './weeklyMeals.module.scss';
import { ReactComponent as MealExample } from '../../../images/meals/meal-example.svg';

const WeeklyMeals = () => (
  <div>
    <div className="d-flex justify-content-between">
      <div className={styles.dayBox}>Monday</div>
      <div className={styles.dayBox}>Tuesday</div>
      <div className={styles.dayBox}>Wednesday</div>
      <div className={styles.dayBox}>Thursday</div>
      <div className={styles.dayBox}>Friday</div>
      <div className={styles.dayBox}>Saturday</div>
      <div className={styles.dayBox}>Sunday</div>
    </div>
    <div className={styles.mealBox}>
      <MealExample
        className={styles.mealBoxImage}
      />
      <div className={styles.mealBoxType}>Dorucak</div>
      <div className={styles.mealBoxText}>
        {' '}
        Meal Title Long
        name
      </div>
    </div>
  </div>
);

export default WeeklyMeals;
