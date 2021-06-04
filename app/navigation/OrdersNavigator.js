import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustOrderScreen from "../screens/CustQuoteListScreen";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Quotes" component={CustQuoteListScreen} /> 
  </Stack.Navigator>
);

export default OrdersNavigator;