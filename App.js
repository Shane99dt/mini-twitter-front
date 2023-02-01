import { View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Nav from "./components/Nav";
import { UserContextProvider } from "./context/User";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import GlobalStyles from "./styles/global/Global";

const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <NativeRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
          </Routes>
          <Nav />
        </UserContextProvider>
      </NativeRouter>
    </View>
  );
};

export default App;
