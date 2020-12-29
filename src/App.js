/*
 * @Author: DuyNg (duynv.ktmt50@gmail.com)
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import routesConfig from './constants/routes-config';

export default class App extends Component {
  render() {
    return (
      <Switch>
        {Object.keys(routesConfig).map(pathName => {
          let routeConf = { ...routesConfig[pathName] };
          let routeComponent = routesConfig[pathName].component;
          let isComponentFunc = routesConfig[pathName].componentFunction;
          delete routeConf.component;
          delete routeConf.componentFunction;

          return (
            <Route
              {...routeConf}
              key={`route-${pathName}`}
              render={props => {
                const { title, requiredAuth, parents, showSidebar, extraMatch, componentFunction } = routeConf;
                let extraMatchOut = {};
                if (extraMatch) {
                  extraMatchOut = extraMatch(props);
                }
                if (isComponentFunc) {
                  routeComponent = routeComponent(props);
                }
                return React.createElement(routeComponent, {
                  ...props,
                  ...extraMatchOut,
                  title,
                  parentRoutes: parents,
                  requiredAuth,
                  showSidebar
                });
              }}
            />
          );
        })}
      </Switch>
    );
  }
}
