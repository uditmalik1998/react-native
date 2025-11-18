import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './navigation/navigator';
import { enableScreens } from 'react-native-screens';
import { Host } from 'react-native-portalize';

enableScreens();

export default function App() {
  return (
    <Host>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Host>
  );
}
