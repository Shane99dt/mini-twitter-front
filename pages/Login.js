import { Text, View } from "react-native";
import { Link } from "react-router-native";
import Form from "../components/Form";
import GlobalStyles from "../styles/global/Global";

const Login = () => {
  return (
    <View>
      <Text style={GlobalStyles.titleText}>Login</Text>
      <Form type={"login"} />
      <Text>
        Don't have an account?
        <Link to={"/auth/signup"}>
          <Text style={GlobalStyles.link}>Sign up</Text>
        </Link>
      </Text>
    </View>
  );
};

export default Login;
