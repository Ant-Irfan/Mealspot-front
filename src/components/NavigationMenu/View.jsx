/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  adminExercisesRoute,
  adminTrainingTableRoute,
  adminRoutinesTableRoute,
  adminTableFoodstuff,
  userProfileRoute,
  userPricingRoute,
  userMealsRoute,
  adminUsers,
  progressUser,
} from '../../utils/pathsHelper';
import styles from './navigationMenu.module.scss';
import UserMocked from '../../images/navigationMenu/userMocked.png';
import { ReactComponent as Meal } from '../../images/navigationMenu/meal.svg';
import { ReactComponent as Workout } from '../../images/navigationMenu/workout.svg';
import { ReactComponent as Logout } from '../../images/navigationMenu/logout.svg';
import { ReactComponent as Transaction } from '../../images/navigationMenu/transaction.svg';
import { ReactComponent as User } from '../../images/navigationMenu/user.svg';
import { ReactComponent as Exercise } from '../../images/navigationMenu/exercise.svg';
import { ReactComponent as Progress } from '../../images/navigationMenu/progress.svg';

const { Sider } = Layout;

const NavigationMenu = (props) => {
  // eslint-disable-next-line react/prop-types
  const { actions, user } = props;
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  useEffect(() => {
    actions.getCurrentActiveUser();
  }, []);

  const collapseStyles = {
    Active: {
      position: 'relative',
      top: 20,
      left: -15,
    },
    Inactive: {
      position: 'unset',
      top: 0,
      left: 0,
    },
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      breakpoint="md"
    >
      <div className={styles.logoPlaceholderContainer}>
        {
              collapsed ? <div />
                : (
                  <div className={styles.paddingMenuItems}>
                    <div
                      className={styles.mealspotHeader}
                    >
                      Mealspot
                    </div>
                    <div
                      className={styles.mealspotHeaderDescription}
                      style={{ paddingRight: 20 }}
                    >
                      healthy meals, healthy life

                    </div>
                  </div>
                )
          }
      </div>
      {
          user
      && (
      <Menu
        theme="dark"
        mode="inline"
      >
        <Menu.Item
          style={user.plan === 'free' && !collapsed ? { height: 130 } : { height: 80 }}
          key="adminItem7"
        >
          <div className={styles.imageContainer}>
            <img
              src={UserMocked}
              alt="user"
              style={collapsed ? collapseStyles.Active : collapseStyles.Inactive}
            />
            <div
              style={{
                paddingRight: 25, display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}
            >
              {user.full_name}
            </div>
          </div>
          <div>
            {
              user.plan === 'free' && !collapsed
            && (
              <NavLink
                to={userPricingRoute}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: '#FBBC05', border: 'none', fontSize: 12, color: 'black',
                  }}
                  className="primary-color-button btn btn-light mt-3 py-2"
                >
                  UPGRADE PLAN
                </button>
              </NavLink>
            )
            }
          </div>
        </Menu.Item>
        <div className={styles.dividerLine} />
        <div
          className={styles.MenuHeading}
        >
          MENU

        </div>
        {
          user.user_type === 'admin'
            ? (
              <>
                <Menu.Item key="adminItem1" icon={<User />}>
                  <NavLink
                    to={adminUsers}
                  >
                    Users
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="adminItem2" icon={<Transaction />}>
                  Transactions
                </Menu.Item>
                <Menu.Item key="adminItem3" icon={<Meal />}>
                  Meals
                </Menu.Item>
                <Menu.Item key="adminItem4" icon={<Workout />}>
                  <NavLink
                    to={adminTrainingTableRoute}
                  >
                    Workout
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="adminItem5"
                  icon={<Exercise />}
                >
                  <NavLink
                    to={adminExercisesRoute}
                  >
                    Exercises
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="adminItem6"
                  icon={<Exercise />}
                >
                  <NavLink
                    to={adminRoutinesTableRoute}
                  >
                    Training
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="adminItem9"
                  icon={<Exercise />}
                >
                  <NavLink
                    to={adminTableFoodstuff}
                  >
                    Foodstuff
                  </NavLink>
                </Menu.Item>
              </>
            )
            : (
              <>
                <Menu.Item
                  key="adminItem10"
                  icon={<User />}
                >
                  <NavLink
                    to={userProfileRoute}
                  >
                    Profile
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="adminItem11"
                  icon={<Meal />}
                >
                  <NavLink
                    to={userMealsRoute}
                  >
                    Meals
                  </NavLink>
                </Menu.Item>
                <Menu.Item
                  key="adminItem12"
                  icon={<Progress />}
                >
                  <NavLink
                    to={progressUser}
                  >
                    Progress
                  </NavLink>
                </Menu.Item>
              </>
            )
        }
        <Menu.Item
          onClick={actions.logoutUser}
          key="adminItem8"
          icon={<Logout />}
        >
          Logout
        </Menu.Item>
      </Menu>
      )
        }
    </Sider>
  );
};

const { shape, func } = PropTypes;
NavigationMenu.propTypes = {
  actions: shape({
    getCurrentActiveUser: func.isRequired,
    logoutUser: func.isRequired,
  }).isRequired,
};

export default NavigationMenu;
