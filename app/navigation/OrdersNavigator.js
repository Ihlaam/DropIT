import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustOrderListScreen from "../screens/CustOrderListScreen";
import CustOrderDetailsScreen from "../screens/CustOrderDetailsScreen";
import CustTrackingScreen from "../screens/CustTrackingScreen";

import colors from "../config/colours";


const Stack = createStackNavigator();

const OrdersNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,}}
  > 
  <Stack.Screen name="Orders" component={CustOrderListScreen} options={{headerLeft: null}}/> 
  <Stack.Screen name="OrderDetails" component={CustOrderDetailsScreen} /> 
  <Stack.Screen name="Track" component={CustTrackingScreen} />
  </Stack.Navigator>
);

export default OrdersNavigator;