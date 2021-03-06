import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import {useSelector} from "react-redux";

const renderListItems = (currentItem, navigation) => {
    return <TouchableOpacity style={styles.categoryButton}
                             onPress={() => navigation.navigate({routeName: 'WishList', params: {
                                    pageName: currentItem.item.title
                                 }})}>
        <View ><Text>{currentItem.item.title}</Text></View>
    </TouchableOpacity>;
}

const PersonalListScreen = props => {
    const listItems = useSelector(state => state.personalList.personalList);
    return (<View style={styles.screen}>
        <ImageBackground style={ styles.imgBackground }
                         resizeMode='cover'  source={require('../assets/mesh_bg.jpg')}>
        <Text>List of my wishlist</Text>
        <View style={styles.categoryContainer}>
            <FlatList data={listItems}
                      renderItem={(currentItem) => renderListItems(currentItem, props.navigation)} />
        </View></ImageBackground>
    </View>);
}

PersonalListScreen.navigationOptions = {
    headerTitle: 'List of your own wishlists!',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    categoryContainer: {
        width: '100%',
        alignItems: 'center'
    },
    categoryButton: {
        flex: 1,
        margin: 10,
        width: '80%',
        minWidth: 300,
        height: 40,
        backgroundColor: 'teal'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});

export default PersonalListScreen;
