import React from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../lib/colors";

export default function Loading() {
  return (
    <View>
      <ActivityIndicator color={colors.highlights} size="large" />
    </View>
  );
}
