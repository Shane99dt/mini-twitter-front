import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import FormTweet from "../components/FormTweet";
import GlobalStyles from "../styles/global/Global";
import supabase from "../supabase/supabase";

const EditTweet = () => {
  // const [getTweet, setGetTweet] = useState(null);
  // const [errors, setErrors] = useState("");
  const { id } = useParams();
  // const navigate = useNavigate();

  // const fetchTweet = async () => {
  //   let { data: tweet, error } = await supabase
  //     .from("tweet")
  //     .select("*")
  //     .eq(id, id);

  //   if (!error) {
  //     setGetTweet(tweet);
  //   } else {
  //     setErrors(error);
  //   }
  //   console.log(tweet);
  // };

  // useEffect(() => {
  //   if (id) {
  //     fetchTweet();
  //   } else {
  //     navigate(`/${id}`);
  //   }
  // }, [id]);

  return (
    <View style={GlobalStyles.container}>
      <FormTweet type={"edit"} params={{ id }} />
    </View>
  );
};

export default EditTweet;
