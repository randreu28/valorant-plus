import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from "../lib/colors";
import { AntDesign } from "@expo/vector-icons";
/**
 * @param {{
 *  onPress: {(event: import("react-native").GestureResponderEvent): void}
 * }} Props
 */
export default function SeeMoreButton({ onPress }) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.buttonPress}>
      <View style={styles.buttonView}>
        <AntDesign name="plus" size={18} color={colors.highlights} />
        <Text style={styles.buttonText}>See more</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonPress: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: colors.highlights,
    borderWidth: 2,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.highlights,
    textAlign: "center",
  },
});
