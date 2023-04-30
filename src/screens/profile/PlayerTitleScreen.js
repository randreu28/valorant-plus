import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {} from "react-native-web";
import { FontAwesome } from "@expo/vector-icons";

import { colors } from "../../lib/colors";

export default function PlayerTitleScreen() {
  const [text, onChangeText] = React.useState();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white", fontSize: 30 }}>Player Title Screen</Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search a title..."
          placeholderTextColor="#A5A5A5"
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <FontAwesome name="search" size={24} color="white" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.bg,
    flexDirection: "row",
    color: "A5A5A5",
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius: 20,
  },
});
