import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { GetTweet } from "../api/tweet";
import { UserContext } from "../context/User";
import FormStyles from "../styles/FormStyles";
import GlobalStyles from "../styles/global/Global";
import supabase from "../supabase/supabase";

const FormTweet = ({ type, params }) => {
  const [description, setDescription] = useState(
    "A little description for the tweet"
  );
  const [errors, setErrors] = useState("");
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  if (!user) {
    navigate("/auth/login");
  }
  const handleSubmitTweet = async () => {
    const { data, error } = await supabase
      .from("tweet")
      .insert([{ description, user_id: user.id }]);

    if (!error) {
      navigate("/");
    } else {
      setErrors(error);
    }
  };

  const handleSubmitEdit = async () => {
    const { data, error } = await supabase
      .from("tweet")
      .update({ description })
      .eq(id, params.id);
  };

  return (
    <>
      {type === "create" && (
        <View>
          <View style={FormStyles.input}>
            <Text>Description</Text>
            <TextInput
              value={description}
              placeholder="So... what's there to tweet?"
              onChangeText={(value) => setDescription(value)}
            />
          </View>

          {errors && <Text style={GlobalStyles.error}>{errors}</Text>}

          <Button title={"Tweet"} onPress={handleSubmitTweet} />
        </View>
      )}

      {type === "edit" && (
        <View>
          <View style={FormStyles.input}>
            <Text>Description</Text>
            <TextInput
              value={description}
              placeholder="So... what's there to tweet?"
              onChangeText={(value) => setDescription(value)}
            />
          </View>

          {errors && <Text style={GlobalStyles.error}>{errors}</Text>}

          <Button title={"Save changes"} onPress={handleSubmitEdit} />
        </View>
      )}
    </>
  );
};

export default FormTweet;
