import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Home from "./Home";
import { store } from "../Redux/store";

import { Provider } from "react-redux";
const index = () => {
  return (
    <Provider store={store}>
      <Home movie={store}  />
    </Provider>
  );
};

export default index;
