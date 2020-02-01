import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import QRScanner from "./components/QRScanner";
import { Button, Header, Overlay } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isVisible: true };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "OmniPay", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Purchase Confirmation </Text>
            <View style={{ height: 100, paddingVertical: 100 }}>
              <Image
                style={{ width: 250, height: 150 }}
                source={require("./assets/dell.jpg")}
              />
              <Text>Dell XPS 13</Text>
            </View>
          </Overlay>
        </View>

        <View style={styles.title}>
          <Text style={styles.text}>
            Welcome to OmniPay, scan an item to purchase!
          </Text>
          <Text>{this.state.count}</Text>
        </View>
        <View style={styles.space}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.setState({ isVisible: true })}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Purchase</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  space: {
    paddingVertical: 80
  },
  text: {
    fontSize: 24
    // fontFamily: "Helvetica"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 1,
    alignItems: "center",
    // height: "80%",
    justifyContent: "center",
    paddingHorizontal: 10
    // paddingVertical: 80
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral"
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
    // height: "20%"
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
