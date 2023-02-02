import { View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import EditUser from "./pages/EditUser";
import Nav from "./components/Nav";
import { UserContextProvider } from "./context/User";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Tweet from "./pages/Tweet";
import GlobalStyles from "./styles/global/Global";
import CreateTweet from "./pages/CreateTweet";
import EditTweet from "./pages/EditTweet";

const App = () => {
  return (
    <View style={GlobalStyles.container}>
      <NativeRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Tweet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/edit" element={<EditUser />} />
            <Route path="/create" element={<CreateTweet />} />
            <Route path="/edit/:id" element={<EditTweet />} />
          </Routes>
          <Nav />
        </UserContextProvider>
      </NativeRouter>
    </View>
  );
};

export default App;
