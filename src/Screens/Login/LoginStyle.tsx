/* eslint-disable react-native/sort-styles */
import {StyleSheet} from 'react-native';
import {colors} from '../../Styles/Color';
let LoginStyle = StyleSheet.create({
  heading: {
    color: colors.BLACK,
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.BLACK,
  },
  textInput: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.MAIN,
    fontSize: 15,
    fontWeight: '500',
    color: colors.BLACK,
  },
  forgotButton: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.DGRAY,
  },
  signInText: {
    fontSize: 16,
    color: colors.WHITE,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 15,
  },
  signInButton: {
    backgroundColor: colors.MAIN,
    width: '100%',
    borderRadius: 30,
  },
  signUp:{
    fontSize:15,
    fontWeight:"400",
    color:colors.DGRAY
  }
});
export default LoginStyle;
