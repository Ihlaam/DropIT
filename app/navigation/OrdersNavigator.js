import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestListScreen from "../screens/CustRequestListScreen";
import CustQuoteListScreen from "../screens/CustQuoteListScreen";
import CustQuoteDetailsScreen from "../screens/CustQuoteDetailsScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";

import colors from "../config/colours";

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.primary}, headerTintColor: colors.secondary,}}> 
  <Stack.Screen name="RequestList" component={CustRequestListScreen} /> 
  <Stack.Screen name="QuoteList" component={CustQuoteListScreen} /> 
  <Stack.Screen name="QuoteDetails" component={CustQuoteDetailsScreen} /> 
  <Stack.Screen name="TrackDelivery" component={CustTrackingScreen} />
  </Stack.Navigator>
);

export default OrdersNavigator;