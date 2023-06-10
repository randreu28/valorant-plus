import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../lib/colors";

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator color={colors.highlights} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, justifyContent: "center" },
});
