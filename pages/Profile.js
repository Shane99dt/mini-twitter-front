import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { Navigate, useNavigate } from "react-router-native";
import { UserContext } from "../context/User";

const Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  // if (user.user_metadata === {} || user.user_metadata == null) {
  //   <Text>Please complete your profile!</Text>;
  // }

  return (
    <>
      {user && (
        <View>
          <Text>Profile</Text>
          <Text>{user.user_metadata.firstName}</Text>
          <Text>{user.user_metadata.lastName}</Text>
          <Text>{user.user_metadata.age}</Text>
        </View>
      )}
    </>
  );
};

export default Profile;
