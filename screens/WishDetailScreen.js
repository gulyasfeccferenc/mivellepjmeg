import React from 'react';
import { View, Text, StyleSheet} from "react-native";

const WishDetailScreen = props => {
    return (<View style={styles.screen}>
        <Text>Detailed info of the wish items</Text>
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'orange'
    }
});

export default WishDetailScreen;
