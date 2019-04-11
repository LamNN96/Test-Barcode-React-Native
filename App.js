import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import { data } from "./data";
import { BarcodeFinder } from "./BarcodeFinder";
import _ from "lodash";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Detail from "./Detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.data = data;
  }

  onBarCodeRead = barcodes => {
    let item = _.find(data, item => item.barcode == barcodes.data);
    this.props.navigation.navigate("Detail", {
      item
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
          onBarCodeRead={this.onBarCodeRead}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== "READY") return <View />;
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <BarcodeFinder
                  width={280}
                  height={220}
                  borderColor="white"
                  borderWidth={3}
                />
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  },
  Detail: {
    screen: Detail
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});
