import {View, Text, TouchableOpacity} from "react-native";
import React, {memo} from "react";
import headerStyle from "./headerStyle";
import MainStyle from "../../Styles/MainStyle";
import {useNavigation} from "@react-navigation/native";
import Images from "../../Constant/ImagePath";
const Header = (route) => {
  const Navigation = useNavigation();
  const {arrow, title} = route;
  // console.log(route);
  return (
    <View style={[headerStyle.headerWrapper, MainStyle.flexRow, {justifyContent: "space-between", zIndex: 100000000000}]}>
      <View style={[MainStyle.flexRow, {gap: 10, width: "90%", justifyContent: "flex-start"}]}>
        {arrow && (
          <TouchableOpacity style={{padding: 5}} onPress={() => Navigation.goBack()}>
            <Images.BackArrow />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 10, width: "80%"}} activeOpacity={0.8}>
          <Text style={headerStyle.headerTitle}>{title}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Images.DotWhite />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
