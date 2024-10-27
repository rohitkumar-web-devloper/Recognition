// /* eslint-disable react/react-in-jsx-scope */
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import navigationString from '../Constant/NavigationStrings';
// import Screen from '../Screens';
// import {colors} from '../Styles/Color';
// export default function TopTabs() {
//   const Tab = createMaterialTopTabNavigator();
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
//         tabBarActiveTintColor: colors.WHITE, // Change this to the color you want for the active label
//         tabBarStyle: {backgroundColor: colors.TEALGREENDARK},
//         tabBarIndicatorStyle: {backgroundColor: colors.WHITE}, // Change this to the color you want for the active bottom line
//         tabBarAndroidRipple: {borderless: true},
//       }}
//     >
//       <Tab.Screen name={navigationString.CHAT} component={Screen.CHAT} />
//       <Tab.Screen name={navigationString.CALL} component={Screen.CALL} />
//       <Tab.Screen name={navigationString.STATUS} component={Screen.STATUS} />
//     </Tab.Navigator>
//   );
// }
