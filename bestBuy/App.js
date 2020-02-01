import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Button, Header, Overlay, PricingCard } from "react-native-elements";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      purchaseVisible: false,
      scannerVisible: false,
      hasPermission: null,
      setHasPermission: null,
      scanned: false,
      setScanned: false,
      service: {},
      product: {},
      offersVisible: false,
      isVisible: false
    };
  }

  handleBarCodeScanned = ({ data }) => {
    this.setState({
      scanned: true,
      purchaseVisible: true,
      scannerVisible: false
    });
    this.setState({ purchaseVisible: true });
  };

  getData = async () => {
    try {
      let response = await fetch(
        "http://206.12.68.63:3001/storeData/registerPurchase",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            uuid: 2250,
            pid: 1000,
            stid: 32,
            date: Date.now()
          })
        }
      );
      let res = await response.json();
      // console.log(res);
      this.setState({ product: res[0] });
      this.setState({ service: res[1] });
      console.log(this.state.product);
      console.log(this.state.service);
      return res;
    } catch (e) {
      console.error(e);
    }
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
            flexDirection: "column",
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
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={
                  this.state.scanned ? undefined : this.handleBarCodeScanned
                }
              />
            </View>
          </Overlay>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Overlay
            isVisible={this.state.purchaseVisible}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text>Purchase Confirmation</Text>
            <View
              style={{
                height: 100,
                // paddingVertical: 100,
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 250, height: 150 }}
                source={require("./assets/dell.jpg")}
              />
              <Text>Dell XPS 13 has been purchased for $199.99 </Text>
              <View style={{ height: 50 }}></View>
              <View style={{}}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ purchaseVisible: false });
                    this.setState({ offersVisible: true });
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Close</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Overlay>
        </View>

        <View style={styles.title}>
          <Text style={styles.text}>
            Welcome to OmniPay, scan an item to purchase!
          </Text>
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

        <Overlay
          isVisible={this.state.offersVisible}
          onBackdropPress={() => this.setState({ offersVisible: false })}
        >
          <Text h3>Latest Personalized Offers</Text>

          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
          <PricingCard
            color="#4f9deb"
            title="Free"
            price="$0"
            info={["1 User", "Basic Support", "All Core Features"]}
            button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          />
          <Text>
            {this.state.product.description} for only $
            {this.state.product.price}
          </Text>

          <Text>
            {this.state.service.description} Only {this.state.product.price}
          </Text>
        </Overlay>
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
  buttonContainer2: {
    justifyContent: "center",
    alignItems: "center"
  },

  button2: {
    paddingVertical: 100,
    borderRadius: 8
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
