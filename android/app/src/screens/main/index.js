import React from 'react';
import LoginScreen from '../login';
import SignupScreen from '../signup';
import HomeScreen from '../home';
import UserScreen from '../user';
import EditpassScreen from '../editpass';
import EdituserScreen from '../edituser';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DeviceDetailScreen from '../deviceDetail/device-detail-screen';
import AddDeviceScreen from '../adddevice';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Editpass" component={EditpassScreen} />
        <Stack.Screen name="Edituser" component={EdituserScreen} />
        <Stack.Screen
          name="DeviceDetail"
          component={DeviceDetailScreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AddDevice"
          component={AddDeviceScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainScreen;
