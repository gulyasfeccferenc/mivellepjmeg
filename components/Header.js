import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const Header = props => {
    return (
        <View style={styles.header}>
            {/*<Text style={styles.headerText}>Mivel lepj meg??</Text>*/}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/adaptive-icon.png')} resize={'contain'} />
            </View>
        </View>)
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3399CC',
        width: '100%',
        paddingTop: 36,
        height: 90,
        alignItems: 'center',
    },
    headerText: {
        color: '#fff',
        padding: 16,
        fontSize: 20
    },
    logoContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: -20
    },
    logo: {
        width: '100%',
        height: '100%'
    }
})
