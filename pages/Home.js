import { Text, View } from "react-native";
import { Link } from "react-router-native";
import GlobalStyles from "../styles/global/Global";

const Home = () => {
  return (
    <View style={GlobalStyles.container}>
      <Link to={"/auth/signup"}>
        <Text>Sign up</Text>
      </Link>
      <Link to={"/auth/login"}>
        <Text>Login</Text>
      </Link>
    </View>
  );
};

export default Home;
