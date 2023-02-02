import { Text, View } from "react-native";
import FormTweet from "../components/FormTweet";
import GlobalStyles from "../styles/global/Global";

const CreateTweet = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Create tweet</Text>
      <FormTweet type={"create"} />
    </View>
  );
};

export default CreateTweet;
