import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props.navigation.state.params;
    console.log(this.props.navigation.state)
    return (
      <View>
        <Text> {item.name} </Text>
        <Text> {item.barcode} </Text>
      </View>
    );
  }
}
