import { createDrawerNavigator } from '@react-navigation/drawer';
import DashBoardScreen from '../app/screens/dashboardscreen';
import TabNavigator from './tabnavigator';

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
        options={{ title: 'DashBoard', headerShown: true }}
      />
      <Drawer.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ title: 'Home' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
