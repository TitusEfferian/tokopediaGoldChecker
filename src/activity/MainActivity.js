import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';

class MainActivity extends React.Component {
    static navigationOptions = {
        title: 'Tokopedia Emas'
    }
    render() {
        console.log(this.props)
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <LinearGradient colors={['#FFFFFF', '#FEECC7','#FDF7E7']} style={{ padding: 80, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Nilai Emas Anda</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>Rp 948.981</Text>
                    <Text>=</Text>
                    <Text>1.5123 Gram</Text>
                </LinearGradient>
            </View>
        )
    }
}
function mapStateToProps(state){
    return{
        goldPrice:state.goldPrice
    }
}
export default connect(mapStateToProps)(MainActivity)