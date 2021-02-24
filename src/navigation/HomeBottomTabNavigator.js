import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
          paddingTop: 8.17,
          height: 48 + insets.bottom,
          paddingBottom: insets.bottom,
        },
        activeTintColor: '#fff',
        // safeAreaInsets: {
        //   bottom: 0, // This way we can ignore specific safe areas
        // },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/home-filled.png')
                  : require('../assets/icons/home-outline.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={require('../assets/icons/search-outline.png')}
              style={{tintColor: color}}
            />
          ),
        }}
        name="Trending"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image source={require('../assets/icons/new-post.png')} />
          ),
          tabBarLabel: '',
        }}
        name="Upload"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/inbox-filled.png')
                  : require('../assets/icons/inbox-outline.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
        name="Inbox"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? require('../assets/icons/profile-filled.png')
                  : require('../assets/icons/profile-outline.png')
              }
              style={{tintColor: color}}
            />
          ),
        }}
        name="Me"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
