import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import CustQuoteScreen from "./app/screens/CustQuoteScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <CustQuoteScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />  
    // </NavigationContainer>
}

//StartNavigator is for welcome/login/register screens
//AppNavigator is for customer home/account/delivery screens

