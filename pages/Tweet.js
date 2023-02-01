import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useParams } from "react-router-native";
import { GetTweet } from "../api/tweet";
import TweetBox from "../components/TweetBox";
import { UserContext } from "../context/User";
import GlobalStyles from "../styles/global/Global";

const Tweet = () => {
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const [tweet, setTweet] = useState(null);

  const fetchTweet = async () => {
    const response = await GetTweet(token, id);
    setTweet(response[0]);
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <View style={GlobalStyles.container}>
      {tweet && <TweetBox tweet={tweet} />}
    </View>
  );
};

export default Tweet;
