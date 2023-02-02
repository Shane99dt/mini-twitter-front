import { Text, View } from "react-native";
import { Link } from "react-router-native";
import GlobalStyles from "../styles/global/Global";
import TweetStyles from "../styles/TweetStyles";
import moment from "moment/moment";

const TweetBox = ({ tweet }) => {
  return (
    <Link to={`/${tweet.id}`}>
      <View style={TweetStyles.box}>
        <Text style={TweetStyles.description}>{tweet.description}</Text>
        <Text>{moment(tweet.created_at).format("MMMM Do YYYY, h:mm")}</Text>
        <Link to={`/edit/${tweet.id}`}>
          <Text style={GlobalStyles.link}>Edit</Text>
        </Link>
      </View>
    </Link>
  );
};

export default TweetBox;
