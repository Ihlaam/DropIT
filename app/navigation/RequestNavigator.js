import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustQuoteScreen from "../screens/CustQuoteScreen";
import CustOrderScreen from "../screens/CustOrderScreen";

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Requests" component={CustRequestsScreen} />
    <Stack.Screen name="Quotes" component={CustQuoteScreen} />
    <Stack.Screen name="NewOrder" component={CustOrderScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;