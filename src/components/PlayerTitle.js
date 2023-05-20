import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";

export default function PlayerTitle({ children, uuid }) {
  return (
    <View style={styles.playertitleView}>
      <Text style={styles.playertitleText}>{children}</Text>

      <FavoriteButton context="player-title" uuid={uuid} />
    </View>
  );
}

const styles = StyleSheet.create({
  playertitleView: {
    height: 90,
    width: "100%",
    flexDirection: "row",
    gap: 50,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 25,
  },
  playertitleText: { fontSize: 35, color: "white", fontFamily: "tungsten" },
});
