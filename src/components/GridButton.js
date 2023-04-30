import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from "../lib/colors";

export default function GridButton() {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => setIsGrid(!isGrid)}
      style={{
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.highlights,
        borderWidth: 2,
        backgroundColor: isGrid ? colors.highlights : colors.base,
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
        <MaterialCommunityIcons
          name="dots-grid"
          size={18}
          color={isGrid ? colors.darkBase : colors.highlights}
        />
        <Text
          style={{
            color: isGrid ? colors.darkBase : colors.highlights,
            textAlign: "center",
          }}
        >
          Grid
        </Text>
      </View>
    </TouchableHighlight>
  );
}
