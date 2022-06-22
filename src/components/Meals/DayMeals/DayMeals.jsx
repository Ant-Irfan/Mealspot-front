import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Progress } from 'antd';
import styles from './dayMeal.module.scss';
import { ReactComponent as Meal } from '../../../images/navigationMenu/mealSilver.svg';
import { ReactComponent as Clock } from '../../../images/meals/clock.svg';

const DayMeals = () => {
  const [isShown, setIsShown] = useState(false);
  // eslint-disable-next-line no-console
  console.log(isShown);
  return (
    <div>
      <div className={styles.dayContainer}>
        <div className={styles.day}>
          Monday
        </div>
        <div className={styles.nutritionBox}>
          <div className={styles.nutrition}>
            Calories
          </div>
          <div className={styles.nutritionValue}>
            2233
          </div>
        </div>
        <div className={styles.nutritionBox}>
          <div className={styles.nutrition}>
            Carbs
          </div>
          <div className={styles.nutritionValue}>
            223g
          </div>
        </div>
        <div className={styles.nutritionBox}>
          <div className={styles.nutrition}>
            Fat
          </div>
          <div className={styles.nutritionValue}>
            33g
          </div>
        </div>
        <div className={styles.nutritionBox}>
          <div className={styles.nutrition}>
            Proteins
          </div>
          <div className={styles.nutritionValue}>
            553g
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <NavLink
              to="meals/test-meal"
            >

              <div
                className={styles.cardContainer}
              >
                <div className={styles.cardImage}>
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className={styles.mealImage}
                  />
                </div>
                <div
                  className={styles.progressRings}
                >
                  <Progress
                    strokeColor="#6BE59B"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#54BEF3"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                </div>

                <div className={styles.nutritionContainer}>
                  <div className={styles.mealType}>
                    Snack
                  </div>
                  <div className={styles.calories}>
                    <Meal />
                    {' '}
                    345 Cals
                  </div>
                  <div className={styles.timePrepared}>
                    <Clock />
                    {' '}
                    45 Mins
                  </div>
                </div>
                <div className={styles.cardTitle}>
                  Paprika Chicken with New Potatoes and Broccoli
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <NavLink
              to="meals/test-meal"
            >

              <div
                className={styles.cardContainer}
              >
                <div className={styles.cardImage}>
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className={styles.mealImage}
                  />
                </div>
                <div
                  className={styles.progressRings}
                >
                  <Progress
                    strokeColor="#6BE59B"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#54BEF3"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                </div>

                <div className={styles.nutritionContainer}>
                  <div className={styles.mealType}>
                    Snack
                  </div>
                  <div className={styles.calories}>
                    <Meal />
                    {' '}
                    345 Cals
                  </div>
                  <div className={styles.timePrepared}>
                    <Clock />
                    {' '}
                    45 Mins
                  </div>
                </div>
                <div className={styles.cardTitle}>
                  Paprika Chicken with New Potatoes and Broccoli
                </div>
              </div>
            </NavLink>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <NavLink
              to="meals/test-meal"
            >

              <div
                className={styles.cardContainer}
              >
                <div className={styles.cardImage}>
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className={styles.mealImage}
                  />
                </div>
                <div
                  className={styles.progressRings}
                >
                  <Progress
                    strokeColor="#6BE59B"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#FC518E"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                  <Progress
                    strokeColor="#54BEF3"
                    type="circle"
                    percent={30}
                    width={55}
                    strokeWidth={14}
                  />
                </div>

                <div className={styles.nutritionContainer}>
                  <div className={styles.mealType}>
                    Snack
                  </div>
                  <div className={styles.calories}>
                    <Meal />
                    {' '}
                    345 Cals
                  </div>
                  <div className={styles.timePrepared}>
                    <Clock />
                    {' '}
                    45 Mins
                  </div>
                </div>
                <div className={styles.cardTitle}>
                  Paprika Chicken with New Potatoes and Broccoli
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(DayMeals);
