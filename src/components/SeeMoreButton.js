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
    <TouchableHighlight
      onPress={onPress}
      style={{
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.highlights,
        borderWidth: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AntDesign name="plus" size={18} color={colors.highlights} />
        <Text
          style={{
            color: colors.highlights,
            textAlign: "center",
          }}
        >
          See more
        </Text>
      </View>
    </TouchableHighlight>
  );
}
