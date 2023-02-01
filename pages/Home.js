import { FlatList, Text, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import GlobalStyles from "../styles/global/Global";
import { UserContext } from "../context/User";
import { useContext, useEffect, useState } from "react";
import { AllTweets } from "../api/tweet";
import TweetBox from "../components/TweetBox";

const Home = () => {
  const { user, token } = useContext(UserContext);
  const navigate = useNavigate();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchTweets();
    }
  }, [user]);

  const fetchTweets = async () => {
    const response = await AllTweets(token);
    setTweets(response);
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home</Text>
      {tweets && (
        <FlatList
          data={tweets}
          renderItem={({ item }) => <TweetBox tweet={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Home;
