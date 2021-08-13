import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MLMNavigator from "./extra/MLMNavigator";
import {enableScreens} from "react-native-screens";
import personalListReducer from "./store/reducers/personal_list";
import { createStore, combineReducers } from 'redux';
import {Provider} from "react-redux";

enableScreens();

const rootReducer = combineReducers({
    personalList: personalListReducer,
});

const store = createStore(rootReducer);

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
        <Provider store={store}>
            <View style={styles.container}>
                <ImageBackground style={ styles.imgBackground }
                                 resizeMode='cover'  source={require('./assets/mesh_bg.jpg')}>
                {/*<StatusBar style="auto" />*/}
                {/*<Header />*/}
                    <MLMNavigator />
                </ImageBackground>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});
