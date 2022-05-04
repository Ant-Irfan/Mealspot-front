/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import styles from './wizzardHeader.module.scss';

const WizzardHeader = (props) => {
  const {
    settitleWidth,
  } = props;

  const headerTitleRef = useRef(null);
  useEffect(() => {
    window.addEventListener('resize', settitleWidth(headerTitleRef.current ? headerTitleRef.current.offsetWidth : 0), false);
  }, []);
  return (
    <div className={styles.wizzardHeaderContainer}>
      <h1
        ref={headerTitleRef}
        className={styles.wizzardHeaderHeading}
      >
        Lets Get Started
      </h1>
      <div
        className={styles.wizzardHeaderDescription}
      >
        Mauris velit quam, dignissim vel ullamcorper vitae,
        egestas eu massa. Sed nibh ante, vehicula eget consequat fermentum,
      </div>
    </div>
  );
};

export default WizzardHeader;
