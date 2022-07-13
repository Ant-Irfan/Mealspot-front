import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {
  LeftOutlined,
} from '@ant-design/icons';
import Guide from '../../../images/workout/guide.gif';
import Start from '../../../images/workout/start.jpeg';
import End from '../../../images/workout/end.jpeg';
import { workoutsUser } from '../../../utils/pathsHelper';
import styles from '../workout.module.scss';
import headerStyles from '../../Wizzard/WizzardHeader/wizzardHeader.module.scss';

const SingleWorkout = () => (
  <div className="container meal-container">
    <div className={headerStyles.wizzardHeaderContainer}>
      <h1
        className={headerStyles.wizzardHeaderHeading}
      >
        Workouts
      </h1>
      <div
        className={headerStyles.wizzardHeaderDescription}
      >
        Mauris velit quam, dignissim vel ullamcorper vitae,
        egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
      </div>
    </div>
    <div
      style={{ borderBottom: '1px solid #EAEAEA', padding: '20px 0px' }}
    >
      <NavLink
        to={workoutsUser}
      >
        <LeftOutlined
          style={{ marginRight: 10 }}
        />
        {' '}
        Back
      </NavLink>
    </div>
    <div className="row mt-4">
      <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.colBorder} ${styles.paddingOnCard}`}>
        <div className={styles.cardTitle}>Incline dumbbell bench press</div>
        <div className="">
          The incline dumbbell bench press is a popular upper-body exercise
          targeting the upper pectoral muscles. While it can be a strength-focused movement,
          it is usually performed for moderate to high reps,
          such as 8-12 reps per set or more, as part of upper-body or chest-focused training.
        </div>
      </div>
      <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.paddingOnCardLeft}`}>
        <div>
          <div className={styles.cardTitleWithoutMargin}>Complexity</div>
          <div>Medium</div>
        </div>
        <div className="mt-2">
          <div className={styles.cardTitleWithoutMargin}>Primary Muscles</div>
          <div className={styles.workoutType}>
            Chest
          </div>
        </div>
        <div className="mt-2">
          <div className={styles.cardTitleWithoutMargin}>Secondary Muscles</div>
          <div className={styles.workoutTypeYellow}>
            Shoulders
          </div>
        </div>
        <div className="mt-2">
          <div className={styles.cardTitleWithoutMargin}>Alternate Exercises</div>
          <div>Incline Bench Press</div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 col-sm-12" style={{ paddingRight: 30 }}>
        <div className={styles.cardTitle}>Instructions</div>
        <div style={{ overflow:'hidden' }}>
          <img
            src={Guide}
            alt="guide"
          />
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12" style={{ paddingLeft: 30 }}>
        <ol>
          <li>
            {' '}
            Lie back on an incline bench with a dumbbell in each hand atop your thighs.
            The palms of your hands will be facing each other.
          </li>
          <li>
            {' '}
            Lie back on an incline bench with a dumbbell in each hand atop your thighs.
            The palms of your hands will be facing each other.
          </li>
          <li>
            {' '}
            Lie back on an incline bench with a dumbbell in each hand atop your thighs.
            The palms of your hands will be facing each other.
          </li>
          <li>
            {' '}
            Lie back on an incline bench with a dumbbell in each hand atop your thighs.
            The palms of your hands will be facing each other.
          </li>
          <li>
            {' '}
            Lie back on an incline bench with a dumbbell in each hand atop your thighs.
            The palms of your hands will be facing each other.
          </li>
        </ol>
        <div>
          <strong style={{ marginRight: 5 }}>Variations</strong>
          You can use several angles on the incline bench if the bench you are using is adjustable.
        </div>
        <div>
          Also, you can perform the exercise with the palms facing each other
          and then twisting the wrist as you lift the dumbbells
          so that at the top of the movement the palms are facing away from the body.
          I personally do not use this variation very often as it seems to be hard on my shoulders.
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className={styles.cardTitle}>Exercise Start</div>
        <img
          width="100%"
          height={220}
          src={Start}
          alt="start"
          style={{ border: '1px solid #EAEAEA', borderRadius:'6px' }}
        />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className={styles.cardTitle}>Exercise End</div>
        <img
          width="100%"
          height={220}
          src={End}
          alt="end"
          style={{ border: '1px solid #EAEAEA', borderRadius:'6px' }}
        />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className={styles.cardTitle}>Exercise Video</div>
        <img
          width="100%"
          height={220}
          src={End}
          alt="end"
          style={{ border: '1px solid #EAEAEA', borderRadius:'6px' }}
        />
      </div>
    </div>
  </div>
);

export default withRouter(SingleWorkout);
