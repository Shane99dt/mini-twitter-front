import { Text, View } from "react-native";
import { Link } from "react-router-native";
import Form from "../components/Form";
import GlobalStyles from "../styles/global/Global";

const SignUp = () => {
  return (
    <View>
      <Text style={GlobalStyles.titleText}>Sign up</Text>
      <Form type={"signup"} />
      <Text>
        Already have an account?{" "}
        <Link to={"/auth/login"} style={GlobalStyles.link}>
          <Text style={GlobalStyles.link}>Log in</Text>
        </Link>
      </Text>
    </View>
  );
};

export default SignUp;
