import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { colors } from "../lib/colors";
import { AntDesign } from "@expo/vector-icons";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableHighlight
      onPress={() => setIsFavorite(!isFavorite)}
      style={{
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.highlights,
        borderWidth: 2,
        backgroundColor: isFavorite ? colors.highlights : "rgba(0, 0, 0, 0)",
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
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={18}
          color={isFavorite ? colors.darkBase : colors.highlights}
        />
        <Text
          style={{
            color: isFavorite ? colors.darkBase : colors.highlights,
            textAlign: "center",
          }}
        >
          Favorite
        </Text>
      </View>
    </TouchableHighlight>
  );
}
