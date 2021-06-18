import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import colors from "../config/colours";

import CustRequestListScreen from "../screens/CustRequestListScreen";
import CustQuoteListScreen from "../screens/CustQuoteListScreen";
import CustQuoteDetailsScreen from "../screens/CustQuoteDetailsScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";

const Stack = createStackNavigator();

function OrdersNavigator() {
  return(
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="RequestList"
        screenOptions={{
           headerStyle: { backgroundColor: colors.primary}, 
           headerTintColor: colors.secondary,
           }}
      > 
        <Stack.Screen name="RequestList" component={CustRequestListScreen} options={{title: "List of Requests"}}/> 
        <Stack.Screen name="QuoteList" component={CustQuoteListScreen} options={{title: "List of Quotes"}}/> 
        <Stack.Screen name="QuoteDetails" component={CustQuoteDetailsScreen} options={{title: "Quote Details"}} /> 
        <Stack.Screen name="TrackDelivery" component={CustTrackingScreen} options={{title: "Track Driver"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default OrdersNavigator;