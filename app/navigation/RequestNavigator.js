import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CustRequestsScreen from "../screens/CustRequestsScreen";
import CustRequestListScreen from "../screens/CustRequestListScreen";
import CustCreateOrderScreen from "../screens/CustCreateOrderScreen";
import colors from "../config/colours";

//NOTE : Home screen, where user can create a new request 

const Stack = createStackNavigator();

function RequestNavigator() {
  return(
  <NavigationContainer theme={navigationTheme}>
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: { backgroundColor: colors.primary},
        headerTintColor: colors.secondary,
      }}
    > 
    <Stack.Screen name="Requests" component={CustRequestsScreen}  options={{headerShown: false}}/>
    <Stack.Screen name="RequestList" component={CustRequestListScreen} options={{title: "List of Requests"}}/>
    <Stack.Screen name="CreateOrder" component={CustCreateOrderScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>

);
    }
export default RequestNavigator;