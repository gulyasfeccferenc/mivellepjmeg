import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, Platform} from 'react-native'
import Colors from '../constants/colors';

const WishListScreen = props => {
    const [wishItems, setWishItems] = useState(['My list of items', 'My list of items 2', 'My list of items 3']);

    return <View style={styles.screen}>
        {wishItems.map((item, index) => <View key={index} style={styles.wishItem}><Text onPress={() => {props.navigation.navigate('WishDetail')}}>{item}</Text></View>)}
        <View style={styles.button}>
            <Button onPress={() => {props.navigation.navigate('WishDetail')}}
                    title={'+'}
                    color={Colors.primary}/>
        </View>
    </View>
}

WishListScreen.navigationOptions = navigationData => {
    const listName = navigationData.navigation.getParam('pageName');

    return {
        headerTitle: `${listName}`,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 36,
        alignItems: 'center'
    },
    wishItem: {
        fontFamily: 'lobster',
        width: '100%',
        padding: 16,
        marginBottom: 8,
        backgroundColor: Colors.primary
    },
    button: {
        width: 80
    }
})

export default WishListScreen
