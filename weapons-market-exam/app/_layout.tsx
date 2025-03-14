import { Stack } from "expo-router";
import { View } from "react-native";
import Header from "./interface/components/header/Header";
import Footer from "./interface/components/footer/Footer";
import Navigation from "./interface/components/navigation/Navigation";

export default function RootLayout() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Navigation/>
      <Stack screenOptions={{ headerShown: false }}/>
      <Footer/>
    </View>
  );
}
