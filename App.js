import 'react-native-gesture-handler';
import React from 'react';
import Router from './src/navigation';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  );
};

export default App;
