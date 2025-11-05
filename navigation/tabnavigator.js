import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedScreen from '../app/screens/completedscreen';
import PendingScreen from '../app/screens/pendingscreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#D22B2B' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
      }}
    >
      <Tab.Screen
        name="Pending"
        component={PendingScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Pending',
          tabBarIcon: ({ color, size }) => (
            <Icon name="pending-actions" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Completed',
          tabBarIcon: ({ color, size }) => (
            <Icon name="sticky-note-2" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={CompletedScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size }) => (
            <Icon name="logout" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
