import React, { useState } from 'react';
import DateMealPicker from './DateMealPicker/DateMealPicker';
import WeeklyMeals from './WeeklyMeals/WeeklyMeals';
import headerStyles from '../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import styles from './meals.module.scss';
import DayMeals from './DayMeals/DayMeals';

const UserMeals = () => {
  const [isWeek, setisWeek] = useState(true);
  return (
    <div className={`${styles.mealContainer} container meal-container`}>
      <div className={headerStyles.wizzardHeaderContainer}>
        <h1
          className={headerStyles.wizzardHeaderHeading}
        >
          Meals
        </h1>
        <div
          className={headerStyles.wizzardHeaderDescription}
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
                ? <WeeklyMeals />
                : <DayMeals />
          }
      </div>
    </div>
  );
};

export default UserMeals;
