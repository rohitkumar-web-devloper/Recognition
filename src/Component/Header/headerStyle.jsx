import {StyleSheet} from "react-native";
import {colors} from "../../Styles/Color";
import {responsiveFontSize} from "../../Constant/Responsive";
let headerStyle = StyleSheet.create({
  // hamburgurWrapper: {

  // },
  headerTitle: {
    color: colors.WHITE,
    fontSize: responsiveFontSize(15),
    fontWeight: "700",
    marginTop: -3,
  },
  headerWrapper: {
    backgroundColor: colors.MAIN,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
export default headerStyle;
