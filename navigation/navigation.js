import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../app/screens/loginscreen";
import HomeScreen from "../app/screens/homescreen";

const RootStack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen name="Login" component={LoginScreen} options={{ title: "Login" }} />
            <RootStack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
        </RootStack.Navigator>
    )
}

export default NavigationStack;