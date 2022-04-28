import React from 'react';
import WizzardHeader from './WizzardHeader/WizzardHeader';

const Wizzard = () => {
  const item = '2';
  // eslint-disable-next-line no-console
  console.log(item);

  return (
    <div className="container">
      <WizzardHeader />
    </div>
  );
};

export default Wizzard;
