import {StatusBar} from "react-native";
import React from "react";
import {colors} from "../../Styles/Color";

const Statusbar = ({content, theme}) => {
  return <StatusBar animated={true} backgroundColor={theme ? colors.WHITE : colors.MAIN} barStyle={content ? "dark-content" : "light-content"} />;
};

export default Statusbar;
