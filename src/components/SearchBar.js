import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../lib/colors";


export default function SearchBar({ onChangeText }) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search a title..."
        placeholderTextColor="#A5A5A5"
        onChangeText={onChangeText}
        style={styles.searchtext}
      />
      <FontAwesome name="search" size={20} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 40,
    backgroundColor: colors.bg,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
    padding: 20,
  },
  searchtext: {
    color: colors.neutral
  },
});
