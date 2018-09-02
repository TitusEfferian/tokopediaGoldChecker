import { createStackNavigator } from 'react-navigation';
import MainActivity from './MainActivity'

export default createStackNavigator({
    MainActivity: {
        screen: MainActivity
    },
});