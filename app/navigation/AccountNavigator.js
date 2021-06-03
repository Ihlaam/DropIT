import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustAccountScreen from "../screens/CustAccountScreen";
import CustActivityScreen from "../screens/CustActivityScreen";


const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Account" component={CustAccountScreen} />
    <Stack.Screen name="Notifications" component={CustActivityScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
