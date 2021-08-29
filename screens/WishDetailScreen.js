import React, {useReducer} from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useDispatch} from "react-redux";

const formReducer = (state, action) => {
    if(action.type === 'UPDATE') {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormValidity = true;
        for (const key in updatedValidities) {
            updatedFormValidity = updatedFormValidity && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormValidity,
            inputValues: updatedValues,
            inputValidities: updatedValidities
        }
    }
    return state;
}

const WishDetailScreen = props => {
    const wishItem = props.navigation.getParam('item');
    const dispatch = useDispatch();

    const [formState, dispatchForm] = useReducer(formReducer, {
        inputValues: {
            name: wishItem?.name | 'Új',
            detail: wishItem?.detail | '',
            url: wishItem?.url | 'https://'
        },
        inputValidities: {
            name: !!wishItem,
            detail:  !!wishItem,
            url:  !!wishItem
        },
        formValidity: false
    });

    const textChangeHandler = (inputIdentifier, text) => {
        let isValid = text.trim().length > 0;
        dispatchForm({type: 'UPDATE', value: text, isValid, input: inputIdentifier})
    }

    let content;
    if (wishItem) {
        content =
            <View>
                <Text>Detailed info of the {wishItem.name} item:</Text>
                <Text>(super secrety id: {wishItem.id})</Text>
                <Text>More detail at {wishItem.url}</Text>
                <Text>{wishItem.detail}</Text>
            </View>;
    } else {
        content =
            <View>
                <Text>Új elem neve:</Text>
                <TextInput
                    style={styles.input}
                    value={formState.inputValues.name}
                    onChangeText={(text) => textChangeHandler('name', text)}
                />
                <Text>Leírás</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => textChangeHandler('detail', text)}
                    value={formState.inputValues.detail}
                />
                <Text>Link</Text>
                <TextInput
                    style={styles.input}
                    value={formState.inputValues.url}
                    onChangeText={(text) => textChangeHandler('url', text)}
                    keyboardType="url"
                />
            </View>
    }
    return (<ImageBackground style={ styles.imgBackground }
                             resizeMode='cover'  source={require('../assets/mesh_bg.jpg')}><View style={styles.screen}>
        {content}
    </View></ImageBackground>);
}

WishDetailScreen.navigationOptions = navigationData => {
    const listName = navigationData.navigation.getParam('item');

    return {
        headerTitle: `${listName?.name || 'Új'}`,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={'Fallbekk'} iconName={'ios-star'} onPress={() => console.log('onFecc')}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {

    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 2,
        margin: 2,
        backgroundColor: 'rgba(255, 255, 255, .2)'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});

export default WishDetailScreen;
