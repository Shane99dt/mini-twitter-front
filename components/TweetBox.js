import { Text, View } from "react-native";
import { Link } from "react-router-native";
import TweetStyles from "../styles/TweetStyles";

const TweetBox = ({ tweet }) => {
  return (
    <Link to={`/${tweet.id}`}>
      <View style={TweetStyles.box}>
        <Text style={TweetStyles.description}>{tweet.description}</Text>
        <Text>{tweet.created_at}</Text>
      </View>
    </Link>
  );
};

export default TweetBox;
