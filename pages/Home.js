import { FlatList, Text, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import GlobalStyles from "../styles/global/Global";
import { UserContext } from "../context/User";
import { useContext, useEffect, useState } from "react";
import { AllTweets } from "../api/tweet";
import Tweet from "../components/Tweet";

const Home = () => {
  const { token, user } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     navigate("/profile");
  //   }
  // }, [token]);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (user) {
      fetchTweets();
    }
  }, [user]);

  const fetchTweets = async () => {
    const response = await AllTweets(token);
    setTweets(response);
    console.log(response);
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
