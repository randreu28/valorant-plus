import React from "react";
import { View, Text, Button } from "react-native";

export default function AgentsMainScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Agents Main Screen!</Text>
      <Button
        title="Go to Map item"
        onPress={() => navigation.navigate("AgentsDetails")}
      />
    </View>
  );
}
