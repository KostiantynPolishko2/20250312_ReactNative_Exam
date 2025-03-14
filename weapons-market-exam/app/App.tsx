import React, { FC } from "react";
import { Text, View } from "react-native";
import { StylesApp } from "./interface/styles/StylesApp";
import Home from "./modules/home/components/Home";

const App:FC = () => {

  return (
    <View style={StylesApp.flex1_center}>
      <Home/>
    </View>
  );
};

export default App;