import { Text, View } from "react-native";
import { Link } from "react-router-native";
import TweetStyles from "../styles/TweetStyles";

const Tweet = ({ tweet }) => {
  return (
    <Link to={`/tweet/${tweet.id}`}>
      <View style={TweetStyles.box}>
        <Text style={TweetStyles.description}>{tweet.description}</Text>
        <Text>{tweet.created_at}</Text>
      </View>
    </Link>
  );
};

export default Tweet;
