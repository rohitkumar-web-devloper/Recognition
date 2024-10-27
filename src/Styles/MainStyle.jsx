import {StyleSheet} from "react-native";
import {colors} from "./Color";
// import {responsiveHeight, responsiveWidth} from '../Constant/Responsive';
let MainStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  flexBetween: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexCloumn: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  flexLeft: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  flexRight: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
export default MainStyle;
