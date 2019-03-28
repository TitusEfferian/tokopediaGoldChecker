import { createStackNavigator, createTabNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

export default createStackNavigator({
    TabNavigator: {
        screen: TabNavigator
    }
});