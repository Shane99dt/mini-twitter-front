import { Text, View } from "react-native";
import { Link } from "react-router-native";
import NavStyles from "../styles/NavStyles";

const Nav = () => {
  return (
    <View style={NavStyles.bottomBar}>
      <Link to={"/"}>
        <Text>Home</Text>
      </Link>
      <Link to={"/profile"}>
        <Text>Profile</Text>
      </Link>
    </View>
  );
};

export default Nav;
