import React, { useState } from 'react';
import DateMealPicker from '../Meals/DateMealPicker/DateMealPicker';
import WeeklyWorkout from './WeeklyWorkout/WeeklyWorkout';
import DailyWorkout from './DailyWorkout/DailyWorkout';
import headerStyles from '../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import styles from './workout.module.scss';

const Workout = () => {
  const [isWeek, setisWeek] = useState(true);
  return (
    <div className={`${styles.mealContainer} container meal-container`}>
      <div className={headerStyles.userHeaderContainer}>
        <h1
          className={headerStyles.userHeaderHeading}
        >
          Workout
        </h1>
        <div
          className={headerStyles.userHeaderDescription}
        >
          Mauris velit quam, dignissim vel ullamcorper vitae,
          egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
        </div>
      </div>
      <div className="mt-4">
        <DateMealPicker
          isWeek={isWeek}
          setisWeek={setisWeek}
        />
      </div>
      <div className="mt-4">
        {
              isWeek
                ? <WeeklyWorkout />
                : <DailyWorkout />
          }
      </div>
    </div>
  );
};

export default Workout;
