/* eslint-disable no-unused-vars */
import * as React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import NavigationStrings from "../Constant/NavigationStrings";
import {colors} from "../Styles/Color";
import Screen from "../Screens";

export default function MainStack() {
  const Stack = createStackNavigator();
  const option = {headerShown: false};
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: colors.WHITE},
        ...TransitionPresets.SlideFromRightIOS, // Use right-to-left animation
      }}
      initialRouteName={NavigationStrings.SPLASH}
    >
      <Stack.Screen name={NavigationStrings.SPLASH} component={Screen.Splash} options={option} />
      <Stack.Screen name={NavigationStrings.LOGIN} component={Screen.Login} options={option} />
      <Stack.Screen name={NavigationStrings.MPIN} component={Screen.Mpin} options={option} />
      <Stack.Screen name={NavigationStrings.HOME} component={Screen.Home} options={option} />
      <Stack.Screen name={NavigationStrings.USERRECONIZE} component={Screen.UserRecognize} options={option} />
      <Stack.Screen name={NavigationStrings.RESETMPIN} component={Screen.ResetMpin} options={option} />
    </Stack.Navigator>
  );
}
