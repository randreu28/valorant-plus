import React from "react";
import { View, Text } from "react-native";
import Mannequin from "./icons/Mannequin";

/**
 * @param {{
 *  head: number
 *  body: number,
 *  legs: number,
 * reloadTime: number,
 * fireRate: number,
 * magCapacity: number,
 * rangeStartMeters: number,
  rangeEndMeters: number,
 * }} Props
 */
export default function WeaponStats({
  head,
  body,
  legs,
  fireRate,
  magCapacity,
  reloadTime,
  rangeStartMeters,
  rangeEndMeters,
}) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ color: "white", fontFamily: "tungsten", fontSize: 20 }}>
          {rangeStartMeters} - {rangeEndMeters}M
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            paddingTop: 20,
          }}
        >
          <Mannequin
            head={computeColor(head)}
            body={computeColor(body)}
            legs={computeColor(legs)}
          ></Mannequin>
          <View style={{ gap: 30, marginVertical: 20 }}>
            <Text style={{ color: computeColor(head), fontFamily: "tungsten" }}>
              {head}
            </Text>
            <Text style={{ color: computeColor(body), fontFamily: "tungsten" }}>
              {body}
            </Text>
            <Text style={{ color: computeColor(legs), fontFamily: "tungsten" }}>
              {legs}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "baseline",
          justifyContent: "space-between",
          maxWidth: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 40 }}>
          <WeaponInfo isLeft>Reload time</WeaponInfo>
          <WeaponInfo isLeft>Fire rate</WeaponInfo>
          <WeaponInfo isLeft>Mag capacity</WeaponInfo>
        </View>

        <View>
          <WeaponInfo>{reloadTime} seconds</WeaponInfo>
          <WeaponInfo>{fireRate} bullets per second</WeaponInfo>
          <WeaponInfo>{magCapacity} bullets</WeaponInfo>
        </View>
      </View>
    </>
  );
}

/**
 * @param {{
 * children: React.ReactNode,
 * isLeft?: boolean,
 * }} Props
 */
function WeaponInfo({ children, isLeft = false }) {
  return (
    <Text
      style={{
        color: "white",
        fontSize: 15,
        textAlign: isLeft ? "left" : "right",
        paddingVertical: 10,
      }}
    >
      {children}
    </Text>
  );
}

function computeColor(value) {
  if (value > 255 || value < 0) {
    throw Error("Value must be between 0 and 255");
  }

  let color;
  if (value === 0) {
    color = "#ffffff";
  } else if (value >= 1 && value < 85) {
    color = "#ffffff";
  } else if (value >= 85 && value < 170) {
    color = "#80ffde";
  } else if (value >= 170 && value < 255) {
    color = "#00ffbc";
  } else {
    throw Error("Value must be between 0 and 255");
  }

  return color;
}
