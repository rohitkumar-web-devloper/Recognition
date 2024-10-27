// /* eslint-disable react/display-name */
// /* eslint-disable react/react-in-jsx-scope */
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Green, White} from '../Styles/Color';
// import Screen from '../Screens';
// import navigationString from '../Constant/NavigationStrings';
// export default Bootom = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarInactiveTintColor: 'gray',
//         tabBarStyle: {height: 60, backgroundColor: White},
//         tabBarLabelStyle: {
//           fontSize: 16,
//           fontWeight: 700,
//           color: Green,
//           marginBottom: 6,
//           marginTop: -5,
//         },
//         headerShown: false,
//       }}
//     >
//       <Tab.Screen
//         name={navigationString.HOME}
//         component={Screen.HOME}
//         options={{
//           //   tabBarIcon: () => <ImagePath.Message />,
//           tabBarLabel: 'Home',
//         }}
//       />
//       <Tab.Screen
//         name={navigationString.CHAT}
//         component={Screen.CHAT}
//         options={{
//           //   tabBarIcon: () => <ImagePath.Message />,
//           tabBarLabel: 'Home',
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
