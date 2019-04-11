import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { styles } from "../theme.js/style";

export default class BlinkLine extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState((state, props) => {
        return {
          visible: !state.visible
        };
      });
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <View>{this.state.visible && <View style={styles.blinkLine} />}</View>
    );
  }
}
