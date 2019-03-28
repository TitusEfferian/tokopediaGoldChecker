import { createMaterialTopTabNavigator } from 'react-navigation';
import TokoEmas from './TokoEmas';
import BukaEmas from './BukaEmas';

export default createMaterialTopTabNavigator({
    TokoEmas: { screen: TokoEmas },
    BukaEmas: { screen: BukaEmas }
})