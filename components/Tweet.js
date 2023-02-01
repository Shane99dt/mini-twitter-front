import { Text, View } from "react-native";
import TweetStyles from "../styles/TweetStyles";

const Tweet = ({ tweet }) => {
  return (
    <View style={TweetStyles.box}>
      <Text style={TweetStyles.description}>{tweet.description}</Text>
      <Text>{tweet.created_at}</Text>
    </View>
  );
};

export default Tweet;
