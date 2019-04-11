import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

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
                    visible: !state.visible,
                };
            });
        }, 1000);
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    render() {
        return <View>
            {this.state.visible && <View style={{
                backgroundColor: 'red',
                height: 2,  
                width: 260,
            }} />}
        </View>
    }
}
