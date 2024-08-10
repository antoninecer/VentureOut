import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RouteDetailScreen = ({ route, navigation }) => {
  const { name, waypoints } = route.params;

  const deleteRoute = async () => {
    try {
      await AsyncStorage.removeItem(`@route_${name}`);
      alert("Route deleted successfully!");
      navigation.goBack(); // Go back to the previous screen
    } catch (e) {
      alert("Failed to delete the route.");
    }
  };

  return (
    <View>
      <Text>Route Name: {name}</Text>
      <Text>Waypoints:</Text>
      {waypoints && waypoints.map((wp, index) => <Text key={index}>{wp}</Text>)}
      <Button title="Delete Route" onPress={deleteRoute} />
    </View>
  );
};

export default RouteDetailScreen;
