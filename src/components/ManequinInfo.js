import React from "react";
import { View, Text } from "react-native";
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
        <Text
          style={{
            color: "white",
            fontFamily: "tungsten",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {rangeStartMeters} - {rangeEndMeters}M
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            paddingRight: "auto",
            paddingTop: 20,
          }}
        >
          <Mannequin
            head={computeColor(headDamage)}
            body={computeColor(bodyDamage)}
            legs={computeColor(legDamage)}
          />
          <View
            style={{
              gap: 30,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: computeColor(headDamage),
                fontFamily: "tungsten",
              }}
            >
              {headDamage.toFixed(0)}
            </Text>
            <Text
              style={{
                color: computeColor(bodyDamage),
                fontFamily: "tungsten",
              }}
            >
              {bodyDamage.toFixed(0)}
            </Text>
            <Text
              style={{ color: computeColor(legDamage), fontFamily: "tungsten" }}
            >
              {legDamage.toFixed(0)}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

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
