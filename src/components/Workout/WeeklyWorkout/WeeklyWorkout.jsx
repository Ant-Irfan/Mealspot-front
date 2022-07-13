import React from 'react';
import styles from '../workout.module.scss';
import { ReactComponent as WorkoutExample } from '../../../images/workout/weeklyWorkout.svg';
import { ReactComponent as WorkoutReps } from '../../../images/workout/workoutReps.svg';

const WeeklyWorkout = () => (
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
    <div className="d-flex justify-content-between">
      <div className={styles.workoutBox}>
        <div className={styles.workoutImageBox}>
          <WorkoutExample />
        </div>
        <div className={styles.weeklyReps}>
          <WorkoutReps
            style={{ marginRight: 5 }}
          />
          3 set X 20 reps
        </div>
        <div className={styles.weeklyWorkoutTitle}>
          Workout Title
          long name
        </div>
      </div>
      <div className={styles.workoutBoxRestDay}>
        <div className={styles.restDayTitle}>Rest Day</div>
      </div>
    </div>
  </div>
);

export default WeeklyWorkout;
