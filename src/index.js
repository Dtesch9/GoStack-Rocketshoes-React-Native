import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import './config/ReactotronConfig';

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
