import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PlanRouteScreen from "./screens/PlanRouteScreen";
import RouteDetailScreen from "./screens/RouteDetailScreen";
import ViewRoutesScreen from "./screens/ViewRouteScreen";

// Přidání logování komponenty do konzole
console.log("PlanRouteScreen:", PlanRouteScreen);

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PlanRoute" component={PlanRouteScreen} />
        <Stack.Screen name="RouteDetail" component={RouteDetailScreen} />
        <Stack.Screen name="ViewRoutes" component={ViewRoutesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
