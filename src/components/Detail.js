import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Detail extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View>
        <Text> Name: {item.name} </Text>
        <Text> Barcode: {item.barcode} </Text>
      </View>
    );
  }
}
