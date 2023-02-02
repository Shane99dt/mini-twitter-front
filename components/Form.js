import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Login, Signup } from "../api/auth";
import FormStyles from "../styles/FormStyles";
import { UserContext } from "../context/User";
import { useNavigate } from "react-router-native";
import supabase from "../supabase/supabase";
import GlobalStyles from "../styles/global/Global";

const Form = ({ type }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("Name 2");
  const [age, setAge] = useState("15");
  const [email, setEmail] = useState("praufroipeipreiyi-3437@yopmail.com");
  const [password, setPassword] = useState("hellohello");
  const [passwordConfirmation, setPasswordConfirmation] =
    useState("hellohello");
  const { setToken, user, setUser } = useContext(UserContext);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      data: { firstName, lastName, age },
    };

    const createUser = await Signup(user);
    setUser(createUser);
    if (createUser) {
      navigate("/profile");
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // const user = {
    //   email,
    //   password,
    // };

    // const { access_token } = await Login(user);
    // if (access_token) {
    //   setToken(access_token);
    //   navigate("/auth/profile");
    // } else {
    //   navigate("/");
    // }

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!error) {
      setUser(data.user);
      console.log(data.user);
      setToken(data.session.access_token);
      navigate("/profile");
    } else {
      setErrors(error);
    }
  };

  const handleEditUser = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: { firstName, lastName, age },
    });

    if (!error) {
      setUser(data.user);
      console.log(data.user);
      navigate("/profile");
    } else {
      setErrors(error);
    }
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.user_metadata.firstName);
      setLastName(user.user_metadata.lastName);
      setAge(user.user_metadata.age);
    }
  }, [user]);

  return (
    <>
      {type === "signup" && (
        <View>
          <View style={FormStyles.input}>
            <Text>First Name</Text>
            <TextInput
              value={firstName}
              placeholder="First name"
              onChangeText={(value) => setFirstName(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Last Name</Text>

            <TextInput
              value={lastName}
              placeholder="Last name"
              onChangeText={(value) => setLastName(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Age</Text>

            <TextInput
              value={age}
              placeholder="Age"
              onChangeText={(value) => setAge(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Email</Text>

            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Password</Text>

            <TextInput
              value={password}
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Password confirmation</Text>

            <TextInput
              value={passwordConfirmation}
              placeholder="Password confirmation"
              onChangeText={(value) => setPasswordConfirmation(value)}
              secureTextEntry
            />
          </View>
          {errors && <Text style={GlobalStyles.error}>{errors}</Text>}

          <Button title={"Sign Up"} onPress={handleSubmitSignUp} />
        </View>
      )}
      {type === "login" && (
        <View>
          <View style={FormStyles.input}>
            <Text>Email</Text>

            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Password</Text>

            <TextInput
              value={password}
              placeholder="Password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
            />
          </View>
          {errors && <Text style={GlobalStyles.error}>{errors}</Text>}

          <Button title={"Log in"} onPress={handleSubmitLogin} />
        </View>
      )}

      {type === "editUser" && user && (
        <View>
          <View style={FormStyles.input}>
            <Text>First Name</Text>
            <TextInput
              value={firstName}
              placeholder="First name"
              onChangeText={(value) => setFirstName(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Last Name</Text>

            <TextInput
              value={lastName}
              placeholder="Last name"
              onChangeText={(value) => setLastName(value)}
            />
          </View>
          <View style={FormStyles.input}>
            <Text>Age</Text>

            <TextInput
              value={age.toString()}
              placeholder="Age"
              onChangeText={(value) => setAge(value)}
            />
          </View>
          {errors && <Text style={GlobalStyles.error}>{errors}</Text>}

          <Button title={"Save changes"} onPress={handleEditUser} />
        </View>
      )}
    </>
  );
};

export default Form;

// user.user_metadata.firstName
