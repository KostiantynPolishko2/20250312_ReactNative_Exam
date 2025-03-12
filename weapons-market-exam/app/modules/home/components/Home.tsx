import React, { FC } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { StylesHome } from "../styles/StylesHome";

const Home:FC = () => {

  const router = useRouter();

  return (
    <View style={StylesHome.body}>
      <Text style={StylesHome.textRow}>home module</Text>
    </View>
  );
};

export default Home;