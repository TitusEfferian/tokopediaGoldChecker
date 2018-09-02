import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { requestGoldPrice } from '../redux/actions/gold'
import {thousandSeparator} from '../common'

class MainActivity extends React.Component {
    static navigationOptions = {
        title: 'Tokopedia Emas'
    }
    constructor(props) {
        super(props)
        this.state = {
            buyPrice: 0,
            sellPrice: 0,
            myGold: 1.6934
        }
    }
    componentDidMount() {
        this.props.goldRequest()
    }
    render() {
        // console.log(this.props)
        if (this.props.goldPrice.data == undefined) {
            return <ActivityIndicator size='large' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
        }
        else {
            //console.log(this.props.goldPrice.data.data)
            return (
                <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                    <LinearGradient colors={['#FFFFFF', '#FEECC7', '#FDF7E7']} style={{ padding: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Nilai Emas Anda</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>Rp {thousandSeparator(this.state.myGold * this.props.goldPrice.data.data.sell_price)}</Text>
                        <Text>=</Text>
                        <Text>1.6934 gram</Text>
                    </LinearGradient>
                </View>
            )
        }

    }
}
function mapStateToProps(state) {
    return {
        goldPrice: state.goldPrice
    }
}
function mapDispatchToProps(dispatch) {
    return {
        goldRequest: () => dispatch(requestGoldPrice())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainActivity)