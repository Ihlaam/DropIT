import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import CustCreateOrderScreen from "./app/screens/CustCreateOrderScreen";

export default function App() {
  return <CustCreateOrderScreen />
    // <NavigationContainer theme={navigationTheme}>
    //   <AppNavigator />  
    // </NavigationContainer>
}

//StartNavigator is for welcome/login/register screens
//AppNavigator is for customer home/account/delivery screens

