import React from "react";
import { View, Text, Button } from "react-native";

export default function WeaponsMainScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white" }}>Weapons Main Screen!</Text>
      <Button
        title="Go to Weapons Details screen"
        onPress={() => navigation.navigate("WeaponsDetails")}
      />
    </View>
  );
}
