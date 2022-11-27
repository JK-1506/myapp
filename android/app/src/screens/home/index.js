import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '../user';
import DeviceScreen from '../device';
import DeviceManageScreen from '../devicemanage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Trang chủ"
        component={DeviceManageScreen}></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="thermometer" color={color} size={size} />
          ),
          showIcon: true,
        }}
        name="Thiết bị"
        component={DeviceScreen}></Tab.Screen>

      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Tôi"
        component={UserScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;
