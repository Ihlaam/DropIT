import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

import AppButton from '../components/AppButton';

//NOTE : not sure how to include the picker in Formik and for validation in Yup
//NOTE : need to make the register button the full width and height of the bottom portion of screen

const user_types = [
    { label : "Driver", value : 1},
    { label : "Customer", value : 2},
];

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    user: Yup.object().required().nullable().label("User Type")
  });
  
function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style = {styles.background}
            source = {require('../assets/Messenger-pana.png')}
        >
            <View style = {styles.loginContainer}>
                <AppForm
                    initialValues={{ user: null, email: "", password: "" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                  <AppFormPicker 
                        items = {user_types}
                        name = "user"
                        placeholder = "Driver/Customer" 
                        />
                        <AppFormField
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        keyboardType = "email-address"
                        name = "email"
                        placeholder = "Email"
                        textContentType = "emailAddress"
                        />
                        <AppFormField
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        name = "password"
                        placeholder = "Password"
                        textContentType = "password"
                        secureTextEntry
                        />
                        <SubmitButton title = "Sign In"/>     
                </AppForm>
            </View>
            <AppButton title = "Don't have an account yet?" onPress = {() => console.log("Create new account")}/>    
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginContainer: {
        padding : 20,
        width : "80%",
    },

});


export default WelcomeScreen;