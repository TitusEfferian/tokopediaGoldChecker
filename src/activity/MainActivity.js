import React from 'react'
import Navigator from './Navigator';

class MainActivity extends React.Component {
    static navigationOptions = {
        title:'gold',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    render() {
        return (
            <Navigator />
        )
    }
}

export default MainActivity