import React, {useState} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import Colors from '../constants/colors';

const WishListScreen = props => {
    const [wishItems, setWishItems] = useState(['My list of items', 'My list of items 2', 'My list of items 3']);

    return <View style={styles.screen}>
        {wishItems.map(item => <View style={styles.wishItem}><Text>{item}</Text></View>)}
        <View style={styles.button}>
            <Button onPress={() => {console.log('modal should open')}} title={'+'} color={Colors.primary}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 36,
        alignItems: 'center'
    },
    wishItem: {
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
