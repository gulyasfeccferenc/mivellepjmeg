import {createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import WishDetailScreen from "../screens/WishDetailScreen";
import WishListScreen from "../screens/WishListScreen";
import PersonalListScreen from "../screens/PersonalListScreen";
import {Platform} from "react-native";

const MLMNavigator = createStackNavigator({
    PersonalList: PersonalListScreen,
    WishList: WishListScreen,
    WishDetail: WishDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#3399CC' : 'transparent',
        },
        headerTintColor:  Platform.OS === 'android' ? 'white' : '#3399CC',
    }
})

export default createAppContainer(MLMNavigator)
