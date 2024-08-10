import React from "react";
import { Button, View, Text } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
