import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  adminExercisesRoute,
  adminTrainingTableRoute,
  adminRoutinesTableRoute,
  adminTableFoodstuff,
} from '../../utils/pathsHelper';
import styles from './navigationMenu.module.scss';
import UserMocked from '../../images/navigationMenu/userMocked.png';
import { ReactComponent as Meal } from '../../images/navigationMenu/meal.svg';
import { ReactComponent as Workout } from '../../images/navigationMenu/workout.svg';
import { ReactComponent as Logout } from '../../images/navigationMenu/logout.svg';
import { ReactComponent as Transaction } from '../../images/navigationMenu/transaction.svg';
import { ReactComponent as User } from '../../images/navigationMenu/user.svg';
import { ReactComponent as Exercise } from '../../images/navigationMenu/exercise.svg';

const { Sider } = Layout;

const NavigationMenu = (props) => {
  const { actions } = props;
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
      <Menu
        theme="dark"
        mode="inline"
      >
        <Menu.Item
          style={{ height: 80 }}
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
              John Doe
            </div>
          </div>
        </Menu.Item>
        <div className={styles.dividerLine} />
        <div
          className={styles.MenuHeading}
        >
          MENU

        </div>
        <Menu.Item key="adminItem1" icon={<User />}>
          Users
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
        <Menu.Item key="adminItem8" icon={<Logout />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

const { shape, func } = PropTypes;
NavigationMenu.propTypes = {
  actions: shape({
    getCurrentActiveUser: func.isRequired,
  }).isRequired,
};

export default NavigationMenu;
