import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
console.disableYellowBox = true;
import {
  Button,
  Header,
  Overlay,
  Text,
  Divider,
  ListItem
} from "react-native-elements";

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
      service: [],
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
    this.getData();
  };

  requestDeal = async offer => {
    offer.date = Date.now();
    this.setState({ service: [] });
    console.log(offer);
    try {
      let response = await fetch(
        "http://206.12.68.149:3001/storeData/registerOffer",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(offer)
        }
      );
      console.log(body);
      return response.statusCode === 200;
    } catch (e) {
      console.error(e);
    }
  };

  getData = async () => {
    try {
      let response = await fetch(
        "http://206.12.68.149:3001/storeData/registerPurchase",
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
      this.setState({ product: res });
      this.setState({ service: res });
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
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Overlay
            isVisible={this.state.scannerVisible}
            onBackdropPress={() => this.setState({ scannerVisible: false })}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text style={styles.main}> Please Scan Item to Purchase </Text>
            <View style={{ height: 100, paddingVertical: 225 }}>
              <BarCodeScanner
                style={StyleSheet.absoluteFillObject}
                onBarCodeScanned={
                  this.state.scanned ? undefined : this.handleBarCodeScanned
                }
              />
            </View>
          </Overlay>
        </View>
        <Image
          style={{ width: 250, height: 150 }}
          source={require("./assets/bestbuy.jpg")}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "00003A",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 50
          }}
        >
          <Text style={styles.text}>Welcome to OmniPay</Text>

          <Text style={styles.text}>Scan an item to </Text>
          <Text style={styles.text}>purchase!</Text>
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

        <Overlay
          // change this later
          isVisible={this.state.offersVisible}
          onBackdropPress={() => this.setState({ offersVisible: false })}
        >
          <Text h4>Offers For You</Text>
          <Divider style={{ backgroundColor: "black" }} />
          <View>
            {this.state.service.map((item, i) => (
              <ListItem
                key={i}
                title={item.description}
                subtitle={"$" + item.price}
                leftIcon="av-timer"
                bottomDivider
                chevron
                badge
                onPress={() => this.requestDeal(item)}
              />
            ))}
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    // fontFamily: "Futura"
  },
  space: {
    paddingVertical: 80
  },
  text: {
    fontSize: 30,
    color: "white",
    alignContent: "center",
    justifyContent: "center"
    // fontFamily: "Futura-CondensedExtraBold"
  },
  container: {
    flex: 1,
    backgroundColor: "#054068",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    flex: 1,
    alignItems: "center",
    // height: "80%",
    justifyContent: "center",
    paddingHorizontal: 30,
    fontSize: 30
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
    paddingVertical: 30,
    paddingHorizontal: 40,
    backgroundColor: "#57c0fb"
  },

  buttonText: {
    // fontFamily: "Futura",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center"
  }
});
