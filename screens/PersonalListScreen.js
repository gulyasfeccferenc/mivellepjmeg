import React from 'react';
import { View, Text, StyleSheet} from "react-native";

const PersonalListScreen = props => {
    return (<View style={styles.screen}>
        <Text>List of my wishlist</Text>
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'pink'
    }
});

export default PersonalListScreen;
