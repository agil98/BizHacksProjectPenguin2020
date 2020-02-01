import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";

export default class MainPage extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View>
          <Text style={styles.buttonText}>Hello</Text>
        </View>
      </TouchableOpacity>

      // <View
      //   style={{
      //     padding: 50,
      //     flex: 1,
      //     // backgroundColor: "#fff",
      //     alignItems: "center",
      //     justifyContent: "center"
      //   }}
      // >
      //   <View
      //     style={{
      //       backgroundColor: "green",
      //       padding: 10
      //     }}
      //   >
      //     <Button title="Purchase" color="green"></Button>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 10
  //   // width: 400
  //   // height: 400
  // }

  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
});
