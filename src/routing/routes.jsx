/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { loginRoute } from '../utils/pathsHelper';
import NavigationMenu from '../components/NavigationMenu';

const { Content } = Layout;
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

export const PrivateNavigationMenuRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      localStorage.getItem('adminToken')
        ? (
          <Layout style={{ minHeight: '100vh' }}>
            <NavigationMenu />
            <Layout className="site-layout">
              <Content
                className="site-layout-background admin-panel-content-container"
              >
                <Component {...props} />
              </Content>
            </Layout>
          </Layout>
        )
        : (
          <Redirect to={loginRoute} />
        )
    )}
  />
);

export const PrivateNavigationMenuUserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      localStorage.getItem('userToken')
        ? (
          <Layout style={{ minHeight: '100vh' }}>
            <NavigationMenu />
            <Layout className="site-layout">
              <Content
                className="site-layout-background user-content-container"
              >
                <Component {...props} />
              </Content>
            </Layout>
          </Layout>
        )
        : (
          <Redirect to={loginRoute} />
        )
    )}
  />
);
export const PrivateNoNavigationMenuUserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={(props) => (
      localStorage.getItem('userToken')
        ? (
          <Component {...props} />
        )
        : (
          <Redirect to={loginRoute} />
        )
    )}
  />
);
