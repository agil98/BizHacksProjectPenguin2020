import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MainPage from "./components/MainPage";
import { Button, Header } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "OmniPay", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Purchase</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    // justifyContent: "center"
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral"
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%"
  },

  button: {
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 35,
    backgroundColor: "blue"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
});
