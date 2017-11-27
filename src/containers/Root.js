import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import routeMap from '../routers';

const Root = ({ store }) => (
  <Provider store={store}>
    {routeMap}
  </Provider>
)

export default Root