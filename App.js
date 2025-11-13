import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./navigation/navigator";
import { enableScreens } from 'react-native-screens';


enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}