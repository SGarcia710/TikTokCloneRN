import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
        <AntDesign name="star" size={16} color="black" />
      </SafeAreaView>
    </>
  );
};

export default App;
