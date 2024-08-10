import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlanRouteScreen = ({ navigation }) => {
  const [routeName, setRouteName] = useState("");
  const [waypoints, setWaypoints] = useState("");

  const saveRoute = async () => {
    try {
      console.log("Saving route:", routeName, waypoints);
      const routeData = {
        name: routeName,
        waypoints: waypoints.split(";").map((wp) => wp.trim()),
      };
      await AsyncStorage.setItem(
        `@route_${routeName}`,
        JSON.stringify(routeData)
      );
      alert("Route saved successfully!");
      navigation.goBack();
    } catch (e) {
      console.error("Failed to save route:", e);
      alert("Failed to save the route.");
    }
  };

  return (
    <View>
      <Text>Plan a new route</Text>
      <TextInput
        placeholder="Route Name"
        value={routeName}
        onChangeText={setRouteName}
      />
      <TextInput
        placeholder="Waypoints (semicolon separated)"
        value={waypoints}
        onChangeText={setWaypoints}
      />
      <Button title="Save Route" onPress={saveRoute} />
    </View>
  );
};

export default PlanRouteScreen;
