import { useContext, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { UserContext } from "../context/User";

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();
  console.log("Bello   " + user);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
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
          <Button onPress={logout} title="Log out" />
        </View>
      )}
    </>
  );
};

export default Profile;
