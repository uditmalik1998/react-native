import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../app/screens/loginscreen';
import DrawerNavigation from './drawernavigator';

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
        component={DrawerNavigation}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;
