import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Platform} from "react-native";
import {PERSONAL_LIST_ITEMS} from "../data/dummy-data";

const renderListItems = (currentItem, navigation) => {
    return <TouchableOpacity style={styles.categoryButton}
                             onPress={() => navigation.navigate({routeName: 'WishList', params: {
                                    pageName: currentItem.item.title
                                 }})}>
        <View ><Text>{currentItem.item.title}</Text></View>
    </TouchableOpacity>;
}

const PersonalListScreen = props => {
    return (<View style={styles.screen}>
        <Text>List of my wishlist</Text>
        <View style={styles.categoryContainer}>
            <FlatList data={PERSONAL_LIST_ITEMS}
                      renderItem={(currentItem) => renderListItems(currentItem, props.navigation)} />
        </View>
    </View>);
}

PersonalListScreen.navigationOptions = {
    headerTitle: 'List of your own wishlists!',
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'rgba(51,153,204,0.1)',
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
    }
});

export default PersonalListScreen;
