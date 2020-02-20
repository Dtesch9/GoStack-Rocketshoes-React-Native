import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';

import store from './store';

import Routes from './routes';
import NavigationServices from './services/navigationServices';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Routes ref={navigator => NavigationServices.setNavigator(navigator)} />
        <StatusBar backgroundColor="#141419" barStyle="light-content" />
      </Provider>
    </>
  );
}
