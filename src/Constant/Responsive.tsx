import {Dimensions, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
export const responsiveFontSize = (fontSize: number) => {
  const screenWidth = SCREEN_WIDTH;
  const screenHeight = SCREEN_HEIGHT;
  const screenDiagonal = Math.sqrt(
    Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2),
  );
  const baseScreenWidth = 360;
  const baseScreenDiagonal = Math.sqrt(
    Math.pow(baseScreenWidth, 2) + Math.pow(640, 2),
  );
  const scale = screenDiagonal / baseScreenDiagonal;
  const adjustedFontSize = fontSize * scale;
  return PixelRatio.roundToNearestPixel(adjustedFontSize);
};

export const responsiveWidth = (width: number) => {
  return SCREEN_WIDTH * width;
};
export const responsiveHeight = (height: number) => {
  return SCREEN_HEIGHT * height;
};
