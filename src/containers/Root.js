import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
// import routeMap from '../routers';
import App from '@/App'

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root