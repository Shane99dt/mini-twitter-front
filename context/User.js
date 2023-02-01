/* eslint-disable react-hooks/exhaustive-deps */

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-native";
import { User } from "../api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localToken = getData();

    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      storeData(token);
      getUser();
    }
  }, [token]);

  const getUser = async () => {
    const response = await User(token);
    console.log(response);
    // setUser(user);
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("token", jsonValue);
    } catch (e) {
      return e;
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("token");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return e;
    }
  };

  const logout = () => {
    removeValue();
    setUser(null);
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      return e;
    }
  };

  const value = {
    setToken,
    user,
    logout,
    setUser,
    token,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
