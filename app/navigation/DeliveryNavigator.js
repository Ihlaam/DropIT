import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustDeliveryScreen from "../screens/CustDeliveryScreen";

const Stack = createStackNavigator();

const DeliveryNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Deliveries" component={CustDeliveryScreen} />
  </Stack.Navigator>
);

export default DeliveryNavigator;
