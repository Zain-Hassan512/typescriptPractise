import {View, Text} from 'react-native';
import React from 'react';
import Routes from './route';
import store from './store';
import {Provider} from 'react-redux';

const index = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default index;
