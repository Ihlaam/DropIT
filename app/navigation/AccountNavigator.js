import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustAccountScreen from "../screens/CustAccountScreen";
import colors from "../config/colours";

//NOTE : Where user can see their account details

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerStyle: { backgroundColor: colors.primary},
      headerTintColor: colors.secondary,
  }}>
  <Stack.Screen name="Account" component={CustAccountScreen} options={{headerLeft: null}}/>
  </Stack.Navigator>
);

export default AccountNavigator;
