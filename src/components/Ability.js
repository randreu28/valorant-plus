import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../lib/colors";

export default function Ability({ image, title, description }) {
  return (
    <View style={styles.abilityView}>
      <Image
        style={styles.abilityImg}
        source={{
          uri: image,
        }}
      />
      <View style={styles.abilityViewCol}>
        <Text style={styles.abilityTitle}>{title}</Text>
        <Text style={styles.abilityDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  abilityView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
    marginVertical: 10,
  },
  abilityViewRow: {
    flex: 1,
    alignContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
  },
  abilityImg: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  abilityViewCol: {
    flex: 1,
    alignContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
  },
  abilityTitle: {
    fontSize: 28,
    color: colors.highlights,
    fontFamily: "tungsten",
    textAlign: "left",
    marginBottom: 3,
  },
  abilityDescription: {
    fontSize: 14,
    color: "white",
    textAlign: "justify",
  },
});
