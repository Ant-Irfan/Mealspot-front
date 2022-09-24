import React from 'react';
import Slider from 'react-slick';
import styles from '../workout.module.scss';
import { ReactComponent as PlayWorkout } from '../../../images/workout/playWorkout.svg';
import { ReactComponent as WorkoutReps } from '../../../images/workout/workoutReps.svg';
import { ReactComponent as RepeatWorkout } from '../../../images/workout/repeatWorkout.svg';
import { ReactComponent as Clock } from '../../../images/meals/clock.svg';

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const DailyWorkout = () => (
  <div>
    <div className={styles.dayContainer}>
      <div className={styles.day}>
        Monday
      </div>
      <div className={styles.nutritionBox}>
        <div className={styles.nutrition}>
          Duration
        </div>
        <div className={styles.nutritionValue}>
          40
        </div>
      </div>
      <div className={styles.nutritionBox}>
        <div className={styles.nutrition}>
          Exc
        </div>
        <div className={styles.nutritionValue}>
          4
        </div>
      </div>
      <div className={styles.nutritionBox}>
        <div className={styles.nutrition}>
          Rep
        </div>
        <div className={styles.nutritionValue}>
          20
        </div>
      </div>
      <div className={styles.nutritionBox}>
        <div className={styles.nutrition}>
          Set
        </div>
        <div className={styles.nutritionValue}>
          5
        </div>
      </div>
    </div>
    <div className="mt-4 col-sm-12 col-md-6 col-lg-4 m-auto workout-slick-slider">
      <Slider
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...sliderSettings}
      >
        <div
          className=""
        >
          <div
            className={styles.cardContainer}
          >
            <div className={styles.repeatWorkout}>
              <RepeatWorkout />
            </div>
            <div className={styles.cardImage} />
            <div className={styles.nutritionContainer}>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
            </div>
            <div className="d-flex">
              <span
                style={{ marginRight: 20 }}
                className={styles.weeklyReps}
              >
                <WorkoutReps
                  style={{ marginRight: 5 }}
                />
                3 set X 20 reps
              </span>
              <span className={styles.weeklyReps}>
                <Clock
                  style={{ marginRight: 5 }}
                />
                Rest 20 sec - 60sec
              </span>
            </div>
            <div className={styles.cardTitle}>
              Legs And Abs, 5 exercises per training
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={styles.cardContainer}
          >
            <div className={styles.repeatWorkout}>
              <RepeatWorkout />
            </div>
            <div className={styles.cardImagewithPlayButton}>
              <div className="d-flex align-items-center h-100 justify-content-center">
                <PlayWorkout />
              </div>
            </div>
            <div className={styles.nutritionContainer}>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
            </div>
            <div className="d-flex">
              <span
                style={{ marginRight: 20 }}
                className={styles.weeklyReps}
              >
                <WorkoutReps
                  style={{ marginRight: 5 }}
                />
                3 set X 20 reps
              </span>
              <span className={styles.weeklyReps}>
                <Clock
                  style={{ marginRight: 5 }}
                />
                Rest 20 sec - 60sec
              </span>
            </div>
            <div className={styles.cardTitle}>
              Legs And Abs, 5 exercises per training
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={styles.cardContainer}
          >
            <div className={styles.repeatWorkout}>
              <RepeatWorkout />
            </div>
            <div className={styles.cardImagewithPlayButton}>
              <div className="d-flex align-items-center h-100 justify-content-center">
                <button
                  style={{
                    backgroundColor: '#FBBC05', border: 'none', fontSize: 14, color: 'black',
                  }}
                  className="primary-color-button btn btn-light py-2"
                  type="button"
                >
                  UPGRADE PLAN

                </button>
              </div>
            </div>
            <div className={styles.nutritionContainer}>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
              <div className={styles.workoutType}>
                Chest
              </div>
            </div>
            <div className="d-flex">
              <span
                style={{ marginRight: 20 }}
                className={styles.weeklyReps}
              >
                <WorkoutReps
                  style={{ marginRight: 5 }}
                />
                3 set X 20 reps
              </span>
              <span className={styles.weeklyReps}>
                <Clock
                  style={{ marginRight: 5 }}
                />
                Rest 20 sec - 60sec
              </span>
            </div>
            <div className={styles.cardTitle}>
              Legs And Abs, 5 exercises per training
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
);

export default DailyWorkout;
