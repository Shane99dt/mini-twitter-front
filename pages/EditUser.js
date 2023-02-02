import { Text, View } from "react-native";
import GlobalStyles from "../styles/global/Global";
import Form from "../components/Form";

const EditUser = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Edit user</Text>
      <Form type={"editUser"} />
    </View>
  );
};

export default EditUser;
