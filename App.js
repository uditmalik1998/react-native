// import * as React from 'react';
// import { View, Text, TextInput } from 'react-native';
// import {
//   createStaticNavigation,
//   useNavigation,
// } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Button } from '@react-navigation/elements';

// function HomeScreen(props) {
//   const navigation = useNavigation();
//   const [text, setText] = React.useState('');
//   console.log(props, 'India');
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TextInput
//         multiline
//         placeholder="What's on your mind"
//         value={text}
//         onChangeText={setText}
//       />
//       <Button
//         onPressIn={() =>
//           navigation.navigate('Details', { itemId: 86, text: 'Something' })
//         }
//       >
//         GO to Details Page
//       </Button>
//       <Button onPress={() => navigation.push('Home')}>Home Page</Button>
//       <Button
//         onPressIn={() => navigation.popTo('Home', { data: text })}
//       >POP TO</Button>
//     </View>
//   );
// }

// const DetailsScreen = ({ route }) => {
//   const navigation = useNavigation();
//   console.log('route.params', route.params);
//   return (
//     <View>
//       <Text>DetailsScreen</Text>
//       <Button onPressIn={() => navigation.push('Details')}>
//         GO to Details
//       </Button>
//       <Button onPressIn={() => navigation.goBack()}>GO Back</Button>
//       <Button onPressIn={() => navigation.popToTop()}>First Screen</Button>
//       <Text>{route.params.itemId}</Text>
//       <Text>{route.params.text}</Text>
//     </View>
//   );
// };

// const RootStack = createNativeStackNavigator({
//   initialRouteName: 'Home',
//   screenOptions: {
//     headerStyle: { backgroundColor: 'tomato' },
//   },
//   screens: {
//     Home: {
//       screen: HomeScreen,
//       options: {
//         title: 'OverView',
//       },
//       initialParams: { name: 'Udit' },
//     },
//     Details: {
//       screen: DetailsScreen,
//       initialParams: { name: 'Udit Malik' },
//     },
//   },
// });

// const Navigation = createStaticNavigation(RootStack);

// export default function App() {
//   return <Navigation />;
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./navigation/navigation";
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}