import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './HomeBottomTabNavigator';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};

export default RootStack;
