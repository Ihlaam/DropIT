import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustQuoteDetailsScreen from "../screens/CustQuoteDetailsScreen";
import CustCreateOrderScreen from "../screens/CustCreateOrderScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";
import CustDeliveryInfoScreen from "../screens/CustDeliveryInfoScreen";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Requests" component={CustRequestsScreen} /> 
    <Stack.Screen name="Quoting" component={CustQuoteDetailsScreen} />
    <Stack.Screen name="CreateOrder" component={CustCreateOrderScreen} />
    <Stack.Screen name="Track" component={CustTrackingScreen} />
    <Stack.Screen name="DeliveryInfo" component={CustDeliveryInfoScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;