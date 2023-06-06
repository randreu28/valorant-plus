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
            <Text
              style={{
                color: computeColor(headDamage),
                ...styles.fontFamily,
              }}
            >
              {headDamage.toFixed(0)}
            </Text>
            <Text
              style={{
                color: computeColor(bodyDamage),
                ...styles.fontFamily,
              }}
            >
              {bodyDamage.toFixed(0)}
            </Text>
            <Text
              style={{ ...styles.fontFamily, color: computeColor(legDamage) }}
            >
              {legDamage.toFixed(0)}
            </Text>
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
  fontFamily: {
    fontFamily: "tungsten",
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
  let color;
  if (value === 0) {
    color = "#ffffff";
  } else if (value >= 1 && value < 85) {
    color = "#c1f7e9";
  } else if (value >= 85 && value < 170) {
    color = "#80ffde";
  } else {
    color = "#00ffbc";
  }

  return color;
}
