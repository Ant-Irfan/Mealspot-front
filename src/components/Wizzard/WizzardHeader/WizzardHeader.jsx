import React from 'react';
import styles from './wizzardHeader.module.scss';

const WizzardHeader = () => (
  <div className={styles.wizzardHeaderContainer}>
    <h1 className={styles.wizzardHeaderHeading}>Lets Get Started</h1>
    <div className={styles.wizzardHeaderDescription}>Lets Get Started</div>
  </div>
);

export default WizzardHeader;
