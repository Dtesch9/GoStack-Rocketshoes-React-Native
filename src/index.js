import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <StatusBar backgroundColor="#141419" barStyle="light-content" />
      </Provider>
    </>
  );
}
