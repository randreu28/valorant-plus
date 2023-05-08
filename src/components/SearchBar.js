import { View, Text } from "react-native";
import { colors } from "../lib/colors";
import { TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function SearchBar() {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: colors.bg,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20,
        padding: 20,
      }}
    >
      <TextInput
        placeholder="Search a title..."
        placeholderTextColor="#A5A5A5"
        style={{ color: colors.neutral }}
      />
      <FontAwesome name="search" size={20} color="white" />
    </View>
  );
}
