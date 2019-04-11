import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { RNCamera } from "react-native-camera";
import { BarcodeFinder } from "./BarcodeFinder";
import _ from "lodash";
import { data } from "../../data";
import { styles } from "../theme.js/style";
import { lang } from "../config/constants";
import Modal from "react-native-modal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisibale: false
    };
  }

  setIntervalHideModal = () => {
    setInterval(() => {
      this.setState({ isModalVisibale: false });
    }, 1700);
  };

  onBarCodeRead = barcodes => {
    let item = _.find(data, item => item.barcode == barcodes.data);
    item
      ? this.props.navigation.navigate("Detail", {
          item
        })
      : this.setState({ isModalVisibale: true }, this.setIntervalHideModal);
  };

  onBarCodeReadAndroid = ({ barcodes }) => {
    let item = _.find(data, item => item.barcode == barcodes[0].data);
    item
      ? this.props.navigation.navigate("Detail", {
          item
        })
      : this.setState({ isModalVisibale: true }, this.setIntervalHideModal);
  };

  render() {
    const { isModalVisibale } = this.state;
    return (
      <View style={styles.container}>
        {Platform.OS == "android" ? (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={lang.permission_dialog_title}
            permissionDialogMessage={lang.permission_dialog_messeage}
            onGoogleVisionBarcodesDetected={this.onBarCodeReadAndroid}
          >
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
          </RNCamera>
        ) : (
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={lang.permission_dialog_title}
            permissionDialogMessage={lang.permission_dialog_messeage}
            onBarCodeRead={this.onBarCodeRead}
          >
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
          </RNCamera>
        )}
        <Modal isVisible={isModalVisibale} style={styles.bottomModal}>
          <View style={styles.warning}>
            <Text style={styles.textNotExist}>This barcode is not exist!</Text>
          </View>
        </Modal>
      </View>
    );
  }
}
