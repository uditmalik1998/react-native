import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../app/screens/loginscreen';
import TabNavigator from './tabnavigator';

const RootStack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;
