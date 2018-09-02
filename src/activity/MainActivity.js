import React from 'react';
import { View, Text } from 'react-native';

class MainActivity extends React.Component {
    static navigationOptions={
        title:'MainScreen'
    }
    render() {
        return (
            <View>
                <Text>
                    MainActivity
                </Text>
            </View>
        )
    }
}
export default MainActivity