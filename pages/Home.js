import { FlatList, Text, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import GlobalStyles from "../styles/global/Global";
import { UserContext } from "../context/User";
import { useContext, useEffect, useState } from "react";
import { AllTweets } from "../api/tweet";
import Tweet from "../components/Tweet";
import supabase from "../supabase/supabase";

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
    // let { data: tweet, error } = await supabase.from("tweet").select("id");
    setTweets(response);
  };

  return (
    <View style={GlobalStyles.container}>
      <Link to={"/auth/signup"}>
        <Text>Sign up</Text>
      </Link>
      <Link to={"/auth/login"}>
        <Text>Login</Text>
      </Link>
      {tweets && (
        <FlatList
          data={tweets}
          renderItem={({ item }) => <Tweet tweet={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Home;
