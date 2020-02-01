import React from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCodeScanner from "./components/QRCodeScanner";

export default function App() {
  return (
      <QRCodeScanner />
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
