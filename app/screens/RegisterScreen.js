import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Screen from "../components/Screen";
import AppText from '../components/AppText';

//EXAMPLE: All screens which are in progress will have the following setup. An image and message letting the user know

function RegisterScreen(props) {
    return (
        <Screen>
        <ImageBackground 
            style = {styles.background}
            resizeMode = "center"
            source = {require('../assets/progress_pana.png')}
        >
        <View style={styles.text}>
            <AppText>Page in Progress</AppText>
        </View>            
        </ImageBackground>
    </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    text: {
        flex: 1,
        fontSize : 100,
        justifyContent : "flex-end",
    }

});

export default RegisterScreen;
