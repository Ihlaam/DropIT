import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import RegisterScreen from "./app/screens/RegisterScreen";
import colors from "./app/config/colours";


const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
            screenOptions={{ 
              headerStyle: { backgroundColor: colors.primary},
              headerTintColor: colors.secondary,
            }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Requests" component={AppNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
