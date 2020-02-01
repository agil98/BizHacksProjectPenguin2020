import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, Header, Overlay } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, purchaseVisible: false, scannerVisible: false, hasPermission: null, setHasPermission: null, scanned : false, setScanned :false};
  }

  handleBarCodeScanned = ({data}) => {
    this.setState({ scanned : true, purchaseVisible: true, scannerVisible: false})
    this.setState({purchaseVisible: true})

  };

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
            isVisible={this.state.scannerVisible}
            onBackdropPress={() => this.setState({ scannerVisible: false })}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Please Scan Item to Purchase </Text>
            <View style={{ height: 100, paddingVertical: 200 }}>
            <BarCodeScanner
                onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            </View>
          </Overlay>
        </View>


        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          }}
        >

          <Overlay
            isVisible={this.state.purchaseVisible}
            onBackdropPress={() => this.setState({ purchaseVisible: false })}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Purchase</Text>
            <View style={{ height: 100, paddingVertical: 100 }}>
              <Image
                style={{ width: 250, height: 150 }}
                source={require("./assets/dell.jpg")}
              />
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
              onPress={() => this.setState({ scannerVisible: true })}
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
