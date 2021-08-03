import React, {useState} from 'react'
import {View, StyleSheet, Text, Button, Platform, ImageBackground} from 'react-native'
import Colors from '../constants/colors';
import {WISHLISTITEMS} from "../data/dummy-data";

const WishListScreen = props => {
    const [wishItems, setWishItems] = useState(WISHLISTITEMS);

    return <ImageBackground style={ styles.imgBackground }
                            resizeMode='cover'  source={require('../assets/mesh_bg.jpg')}>
        <View style={styles.screen}>

        {wishItems.map((item, index) => <View key={index} style={styles.wishItem}>
            <Text onPress={() => {props.navigation.navigate('WishDetail', {item: item})}}>{item.name}</Text></View>)}
        <View style={styles.button}>
            <Button onPress={() => {props.navigation.navigate('WishDetail')}}
                    title={'+'}
                    color={Colors.primary}/>
        </View>

    </View>
    </ImageBackground>
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
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
})

export default WishListScreen
