import React, { Component } from "react";
import { View } from "react-native";
import BlinkLine from "./BlinkLine";
import { styles } from "../theme.js/style";

export class BarcodeFinder extends Component {
  getSizeStyles() {
    return {
      width: this.props.width,
      height: this.props.height
    };
  }

  render() {
    return (
      <View style={[styles.containerFinder]}>
        <View style={[styles.finder, this.getSizeStyles()]}>
          <View
            style={[
              { borderColor: this.props.borderColor },
              styles.topLeftEdge,
              {
                borderLeftWidth: this.props.borderWidth,
                borderTopWidth: this.props.borderWidth
              }
            ]}
          />
          <View
            style={[
              { borderColor: this.props.borderColor },
              styles.topRightEdge,
              {
                borderRightWidth: this.props.borderWidth,
                borderTopWidth: this.props.borderWidth
              }
            ]}
          />
          <BlinkLine />
          <View
            style={[
              { borderColor: this.props.borderColor },
              styles.bottomLeftEdge,
              {
                borderLeftWidth: this.props.borderWidth,
                borderBottomWidth: this.props.borderWidth
              }
            ]}
          />
          <View
            style={[
              { borderColor: this.props.borderColor },
              styles.bottomRightEdge,
              {
                borderRightWidth: this.props.borderWidth,
                borderBottomWidth: this.props.borderWidth
              }
            ]}
          />
        </View>
      </View>
    );
  }
}
