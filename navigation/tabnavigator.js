import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedScreen from '../app/screens/completedscreen';
import PendingScreen from '../app/screens/pendingscreen';
import ProfileScreen from "../app/screens/profilescreen";
import LogoutScreen from "../app/screens/logoutscreen";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

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
          tabBarLabel: 'Active Request',
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
          tabBarLabel: 'Complete',
          tabBarIcon: ({ color, size }) => (
            <Icon name="sticky-note-2" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontIcon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
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
