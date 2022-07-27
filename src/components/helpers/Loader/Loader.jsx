import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// eslint-disable-next-line react/prop-types
const Loader = ({ size }) => (
  <div
    className="d-flex vh-100 flex-column align-items-center justify-content-around"
    style={{ backgroundColor:'#EAEAEA' }}
  >
    <Spin indicator={(
      <LoadingOutlined
        style={{
          fontSize: size,
          color: '#56A2BE',
        }}
        spin
      />
      )}
    />
  </div>
);

export default Loader;
