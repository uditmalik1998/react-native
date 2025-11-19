import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardScreen from '../app/screens/dashboardscreen';
import TabNavigator from './tabnavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DrawerHeader from '../app/component/drawerheader';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#D22B2B',
        drawerInactiveTintColor: '#565758',
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={DashBoardScreen}
        options={{
          title: 'DashBoard',
          headerShown: true,
          drawerIcon: ({ size, color }) => (
            <FontAwesome name="dashboard" size={size} color={color} />
          ),
          header: () => <DrawerHeader heading="DashBoard" iconName="menu" />,
        }}
      />
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="house" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
