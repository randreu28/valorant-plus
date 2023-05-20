import { View, Text } from "react-native";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";

export default function PlayerTitle({ children, uuid }) {
  return (
    <View
      style={{
        height: 90,
        width: "100%",
        flexDirection: "row",
        gap: 50,
        justifyContent: "space-between",
        alignItems: "center",
        padding: 25,
      }}
    >
      <Text style={{ fontSize: 35, color: "white", fontFamily: "tungsten" }}>
        {children}
      </Text>

      <FavoriteButton context="player-title" uuid={uuid} />
    </View>
  );
}
