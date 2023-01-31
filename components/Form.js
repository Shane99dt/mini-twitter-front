import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Login, Signup } from "../api/auth";
import FormStyles from "../styles/FormStyles";

const Form = ({ type }) => {
  const [firstName, setFirstName] = useState("Name 1");
  const [lastName, setLastName] = useState("Name 2");
  const [age, setAge] = useState("15");
  const [email, setEmail] = useState("hello@yopmail.com");
  const [password, setPassword] = useState("hellohello");
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456789");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      data: { firstName, lastName, age },
    };

    const createUser = await Signup(user);
    setUser(createUser);
    console.log(createUser);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    const loginUser = await Login(user);
    setToken(loginUser);
    console.log(loginUser);
  };

  return (
    <>
      {type === "signup" && (
        <View>
          <Text>Sign up</Text>
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

          <Button title={"Sign Up"} onPress={handleSubmitSignUp} />
        </View>
      )}
      {type === "login" && (
        <View>
          <Text>Login</Text>
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
          <Button title={"Sign Up"} onPress={handleSubmitLogin} />
        </View>
      )}
    </>
  );
};

export default Form;
