import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../lib/colors";

export default function Loading({}) {
  return (
    <View style={styles.loading}>
      <Text style={styles.loadingtext}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingtext: {
    color: "white",
  },
});
