import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  LeftOutlined,
} from '@ant-design/icons';
import TestImage from '../../../images/meals/test.png';
import { userMealsRoute } from '../../../utils/pathsHelper';
import headerStyles from '../../Wizzard/WizzardHeader/wizzardHeader.module.scss';
import styles from '../meals.module.scss';
import dayStyles from '../DayMeals/dayMeal.module.scss';
import { ReactComponent as Clock } from '../../../images/meals/clock.svg';
import { ReactComponent as Ingredients } from '../../../images/meals/ingredients.svg';
import { ReactComponent as Meal } from '../../../images/navigationMenu/mealSilver.svg';

const SingleMeal = () => (
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
    <div
      className={dayStyles.backToMeals}
      style={{ borderBottom: '1px solid #EAEAEA' }}
    >
      <NavLink
        to={userMealsRoute}
      >
        <LeftOutlined
          style={{ marginRight: 10 }}
        />
        {' '}
        Back
      </NavLink>
    </div>
    <div className="row mt-3">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <img
          style={{ borderRadius: 5 }}
          src={TestImage}
          alt="test"
          className={dayStyles.singleMealImage}
        />
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-around">
        <div
          style={{ maxWidth: 60 }}
          className={dayStyles.mealType}
        >
          Snack
        </div>
        <div className={dayStyles.singleMealHeading}>
          Paprika Chicken with New
          Potatoes and Broccoli
        </div>
        <div className={styles.timePrepared}>
          <Clock />
          {' '}
          Under 45 Mins
        </div>
        <div className={`${styles.nutritionContainerSingleMeal} d-flex justify-content-between`}>
          <div>Cal 331 </div>
          <div>Carbs 20g </div>
          <div>Fat 10g </div>
          <div>Pro 42g </div>
        </div>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className={dayStyles.singleMealListHeading}>
          <Ingredients
            style={{ marginRight: 10 }}
          />
          Ingridients
        </div>
        <div className={dayStyles.listContainer}>
          <ul
            style={{ marginLeft: 10 }}
          >
            <li>Chicken Breast - 1 Medium (170g)</li>
            <li>Chicken Breast - 1 Medium (170g)</li>
            <li>Chicken Breast - 1 Medium (170g)</li>
            <li>Chicken Breast - 1 Medium (170g)</li>
            <li>Chicken Breast - 1 Medium (170g)</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        {' '}
        <div className={dayStyles.singleMealListHeading}>
          <Meal
            style={{ marginRight: 10 }}
          />
          Instructions
        </div>
        <div className={dayStyles.listContainer}>
          <ul
            style={{ marginLeft: 10 }}
          >
            <li>
              Pre-heat the oven to 200 C (390 F).
              Coat the chicken in 1 tsp of olive oil and the paprika.
            </li>
            <li>
              Pre-heat the oven to 200 C (390 F).
              Coat the chicken in 1 tsp of olive oil and the paprika.
            </li>
            <li>
              Pre-heat the oven to 200 C (390 F).
              Coat the chicken in 1 tsp of olive oil and the paprika.
            </li>
            <li>
              Pre-heat the oven to 200 C (390 F).
              Coat the chicken in 1 tsp of olive oil and the paprika.
            </li>
            <li>
              Pre-heat the oven to 200 C (390 F).
              Coat the chicken in 1 tsp of olive oil and the paprika.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(SingleMeal);
