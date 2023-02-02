import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "#dff",
    flex: 1,
  },

  link: {
    padding: 0,
    margin: 0,
    color: "blue",
  },

  titleText: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 15,
  },

  error: {
    color: "red",
  },
});

export default GlobalStyles;
