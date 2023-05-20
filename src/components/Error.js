import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../lib/colors";

export default function Error({}) {
  return (
    <View style={styles.error}>
      <Text style={styles.errortext}>Error!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  errortext: {
    color: "red",
  },
});
