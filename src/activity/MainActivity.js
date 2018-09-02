import React from 'react';
import { View, Text, ActivityIndicator, ScrollView, RefreshControl, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { requestGoldPrice } from '../redux/actions/gold'
import { thousandSeparator } from '../common'
import Cards from '../components/cards';

class MainActivity extends React.Component {
    static navigationOptions = {
        title: 'Tokopedia Emas'
    }
    constructor(props) {
        super(props)
        this.state = {
            buyPrice: 0,
            sellPrice: 0,
            myGold: 1.6934,
            refreshing: false,
            width: Dimensions.get('screen').width / 2
        }
    }
    componentDidMount() {
        this.props.goldRequest()
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.props.goldRequest()
        if (!this.props.goldPrice.isFetching) {
            this.setState({ refreshing: this.props.goldPrice.isFetching });
        }

    }
    render() {
        if (this.props.goldPrice.data == undefined || this.props.goldPrice.isFetching) {
            return <ActivityIndicator size='large' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
        }
        else {
            return (
                <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                />}>
                    <LinearGradient colors={['#FFFFFF', '#FEECC7', '#FDF7E7']} style={{ padding: 80, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Nilai Emas Anda</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>Rp {thousandSeparator(this.state.myGold * this.props.goldPrice.data.data.sell_price)}</Text>
                        <Text>=</Text>
                        <Text>1.6934 gram</Text>
                    </LinearGradient>

                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 16 }}>
                        <Cards
                            text={"sdfsdfsdf"}
                            width={this.state.width}
                        >
                            <Text style={{ fontSize: 12 }}>Harga Beli Saat Ini</Text>
                            <Text style={{color:'black'}}>Rp {thousandSeparator(this.props.goldPrice.data.data.buy_price)}</Text>

                        </Cards>
                        <Cards
                            text={"sdfsdfsdf"}
                            width={this.state.width}
                        >
                            <Text style={{ fontSize: 12 }}>Harga Jual Saat Ini</Text>
                            <Text style={{color:'black'}}>Rp {thousandSeparator(this.props.goldPrice.data.data.sell_price)}</Text>
                        </Cards>
                    </View>

                </ScrollView >
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