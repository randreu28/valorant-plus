import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from "../lib/colors";

export default function EditButton() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => setIsEditing(!isEditing)}
      style={{
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.highlights,
        borderWidth: 2,
        backgroundColor: isEditing ? colors.highlights : colors.base,
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
          name="pencil"
          size={18}
          color={isEditing ? colors.darkBase : colors.highlights}
        />
        <Text
          style={{
            color: isEditing ? colors.darkBase : colors.highlights,
            textAlign: "center",
          }}
        >
          Edit
        </Text>
      </View>
    </TouchableHighlight>
  );
}
