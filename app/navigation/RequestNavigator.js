import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustRequestListScreen from "../screens/CustRequestListScreen";
import CustCreateOrderScreen from "../screens/CustCreateOrderScreen";
import colors from "../config/colours";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

const RequestNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,
    }}
  > 
  <Stack.Screen name="Requests" component={CustRequestsScreen}  />
  <Stack.Screen name="RequestList" component={CustRequestListScreen} />
  <Stack.Screen name="CreateOrder" component={CustCreateOrderScreen} />
  </Stack.Navigator>
);

export default RequestNavigator;