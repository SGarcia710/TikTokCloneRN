import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tabs = () => {
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState(1);
  const tab1val = useRef(new Animated.Value(1)).current;
  const tab2val = useRef(new Animated.Value(1.1)).current;

  const handleOnPressIn = useCallback((tabIndex) => {
    setSelectedTab(tabIndex);
    Animated.spring(tabIndex === 0 ? tab1val : tab2val, {
      toValue: 1.2,
      delay: 0,
      useNativeDriver: true,
    }).start();
    Animated.spring(tabIndex === 0 ? tab2val : tab1val, {
      toValue: 0.8,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }, []);
  const handleOnPressOut = useCallback((tabIndex) => {
    setSelectedTab(tabIndex);
    Animated.spring(tabIndex === 0 ? tab1val : tab2val, {
      toValue: 1.1,
      delay: 0,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
    Animated.spring(tabIndex === 0 ? tab2val : tab1val, {
      toValue: 1,
      delay: 0,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  }, []);

  return (
    <View style={[styles.container, {marginTop: 13 + insets.top}]}>
      <TouchableWithoutFeedback
        onPressIn={() => handleOnPressIn(0)}
        onPressOut={() => handleOnPressOut(0)}>
        <Animated.Text
          style={[
            styles.tab,
            {
              transform: [
                {
                  scale: tab1val,
                },
              ],
              fontWeight: selectedTab === 0 ? '800' : '600',
            },
          ]}>
          Following
        </Animated.Text>
      </TouchableWithoutFeedback>
      <Text
        style={[
          styles.tab,
          {
            opacity: 0.2,
            marginHorizontal: 8.5,
          },
        ]}>
        |
      </Text>
      <TouchableWithoutFeedback
        onPressIn={() => handleOnPressIn(1)}
        onPressOut={() => handleOnPressOut(1)}>
        <Animated.Text
          style={[
            styles.tab,
            {
              transform: [
                {
                  scale: tab2val,
                },
              ],
              fontWeight: selectedTab === 1 ? '800' : '600',
            },
          ]}>
          For you
        </Animated.Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  tab: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Tabs;
