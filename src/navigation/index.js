import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
