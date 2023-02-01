import { useContext, useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { UserContext } from "../context/User";
import GlobalStyles from "../styles/global/Global";

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  return (
    <>
      {user && (
        <View style={GlobalStyles.container}>
          <Text style={GlobalStyles.titleText}>Profile</Text>
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
