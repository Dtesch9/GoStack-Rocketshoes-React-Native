import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
    </>
  );
}
