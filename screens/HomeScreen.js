// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    loadRoutes();
  }, []);

  const loadRoutes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const routeKeys = keys.filter((key) => key.startsWith("@route_"));
      const storedRoutes = await AsyncStorage.multiGet(routeKeys);
      const loadedRoutes = storedRoutes.map((route) => JSON.parse(route[1]));
      setRoutes(loadedRoutes);
    } catch (e) {
      alert("Failed to load routes.");
    }
  };

  const resetRoutes = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const routeKeys = keys.filter((key) => key.startsWith("@route_"));
      await AsyncStorage.multiRemove(routeKeys);
      setRoutes([]);
      alert("All routes have been reset.");
    } catch (e) {
      alert("Failed to reset routes.");
    }
  };

  return (
    <View>
      <Text>Welcome to the Route Planner</Text>
      <Button
        title="Plan a new route"
        onPress={() => navigation.navigate("PlanRoute")}
      />
      <Button
        title="View All Routes"
        onPress={() => navigation.navigate("ViewRoutes")}
      />
      <Button title="Reset All Routes" onPress={resetRoutes} />
    </View>
  );
};

export default HomeScreen;
