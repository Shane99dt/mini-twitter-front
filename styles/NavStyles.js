import { StyleSheet } from "react-native";

const NavStyles = StyleSheet.create({
  bottomBar: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
    marginHorizontal: "auto",
    bottom: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default NavStyles;
