import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewRoutesScreen = ({ navigation }) => {
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

  return (
    <View>
      <Text>All Saved Routes</Text>
      <FlatList
        data={routes}
        keyExtractor={(item, index) => `route_${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RouteDetail", {
                name: item.name,
                waypoints: item.waypoints,
              })
            }
          >
            <Text>
              {item.name}: {item.waypoints.join(" -> ")}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ViewRoutesScreen;
