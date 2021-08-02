import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import WishListScreen from "./screens/WishListScreen";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MLMNavigator from "./extra/MLMNavigator";

const fetchFonts = () => {
    return Font.loadAsync({
        'lobster': require('./assets/fonts/LobsterTwo-Regular.ttf'),
        'lobster-bold': require('./assets/fonts/LobsterTwo-Regular.ttf'),
    })
}

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if(!fontsLoaded) {
        return <AppLoading startAsync={fetchFonts}
                           onFinish={() => setFontsLoaded(true)}
                           onError={(err) => console.log(err)} />
    }

    return (
        <View style={styles.container}>
            {/*<StatusBar style="auto" />*/}
            {/*<Header />*/}
            <MLMNavigator />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
