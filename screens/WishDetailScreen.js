import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from "react-native";

const WishDetailScreen = props => {
    const wishItem = props.navigation.getParam('item');

    return (<ImageBackground style={ styles.imgBackground }
                             resizeMode='cover'  source={require('../assets/mesh_bg.jpg')}><View style={styles.screen}>

        <Text>Detailed info of the {wishItem.name} items</Text>

    </View></ImageBackground>);
}

WishDetailScreen.navigationOptions = navigationData => {
    const listName = navigationData.navigation.getParam('item');

    return {
        headerTitle: `${listName.name}`,
    }
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'orange'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});

export default WishDetailScreen;
