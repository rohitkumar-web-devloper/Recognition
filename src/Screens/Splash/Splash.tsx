/* eslint-disable react-native/no-inline-styles */
import { View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../Styles/Color';
import Images from '../../Constant/ImagePath';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../Constant/NavigationStrings';
import { useSelector } from 'react-redux';
import { red } from 'react-native-reanimated/lib/typescript/Colors';
const Splash = (props: any) => {
  const reduxData = useSelector((state): any => state)
  const AuthCheck = async () => {
    if (!reduxData.Binding.Binding) {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: navigationString.LOGIN }],
        });
      }, 2000);
    } else if (reduxData.token.token) {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: navigationString.MPIN }],
        });
      }, 2000);
    } else {
      setTimeout(() => {
        props.navigation.reset({
          index: 0,
          routes: [{ name: navigationString.LOGIN }],
        });
      }, 2000);
    }
  };
  const Navigation = useNavigation()
  useEffect(() => {
    AuthCheck()
  }, []);
  return (
    <>
      <StatusBar animated={true} backgroundColor={colors.MAIN} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Images.WelcomeImage />
      </View>
    </>
  );
};

export default Splash;
