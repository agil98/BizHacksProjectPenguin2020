import React from "react";
import { StyleSheet, Text, View } from "react-native";
//import MainPage from "./components/MainPage";
import QRCodeScanner from "./components/QRCodeScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Project Penguin!!!!!!!!!!!</Text>
      <MainPage />
      <QRCodeScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
