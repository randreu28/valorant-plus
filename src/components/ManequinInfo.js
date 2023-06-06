import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Mannequin from "./icons/Mannequin";

/**
 * @param {{
 * bodyDamage: number,
 * headDamage: number,
 * legDamage: number
 * rangeStartMeters: number,
 * rangeEndMeters: number,
 * }} Props
 */
export default function ManequinInfo({
  bodyDamage,
  headDamage,
  legDamage,
  rangeStartMeters,
  rangeEndMeters,
}) {
  return (
    <>
      <View>
        <Text style={styles.text}>
          {rangeStartMeters} - {rangeEndMeters}M
        </Text>
        <View style={styles.view}>
          <Mannequin
            head={computeColor(headDamage)}
            body={computeColor(bodyDamage)}
            legs={computeColor(legDamage)}
          />
          <View style={styles.wrapper}>
            <Text style={styles.numbers}>{headDamage.toFixed(0)}</Text>
            <Text style={styles.numbers}>{bodyDamage.toFixed(0)}</Text>
            <Text style={styles.numbers}>{legDamage.toFixed(0)}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    gap: 30,
    marginVertical: 20,
  },
  numbers: {
    fontFamily: "tungsten",
    color: "white",
  },
  text: {
    color: "white",
    fontFamily: "tungsten",
    fontSize: 20,
    textAlign: "center",
  },
  view: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    paddingRight: "auto",
    paddingTop: 20,
    gap: 10,
  },
});

/**
 * @param value: number
 **/
function computeColor(value) {
  return `rgba(0, 255, 188, ${(value / 255) * 1.5})`;
}
