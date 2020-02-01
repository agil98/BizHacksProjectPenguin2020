import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Button, Header, Overlay } from "react-native-elements";

export default class Receipt extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isVisible: true };
  }
  render() {
    return (
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
            <Text>Dell XPS 13 has been purchased for $199.99 </Text>
          </View>
        </Overlay>
      </View>
    );
  }
}
