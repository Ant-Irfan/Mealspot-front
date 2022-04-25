/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route } from 'react-router-dom';

export const RouteWithoutNavbar = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      <div>
        <Component {...props} />
      </div>
    )}
  />
);
