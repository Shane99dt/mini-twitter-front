/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { User } from "../api/auth";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const localToken = localStorage.getItem("token");

  //   if (localToken) {
  //     setToken(localToken);
  //   }
  // }, []);
  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      // localStorage.setItem("token", token);
      getUser();
    }
  }, [token]);

  const getUser = async () => {
    const { user } = await User(token);
    setUser(user);
  };

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   setUser(null);
  // };

  const value = {
    setToken,
    user,
    // logout,
    setUser,
    token,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
