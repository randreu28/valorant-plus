import React from "react";
import { View, Text, StyleSheet } from "react-native";
/**
 * @param {{
 * reloadTime: number,
 * fireRate: number,
 * magCapacity: number,
 * }} Props
 */

export default function WeaponStats({ reloadTime, fireRate, magCapacity }) {
  return (
    <View
      style={styles.weaponWrapper}
    >
      <View>
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
  );

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
          ...styles.infoWrapper,
          textAlign: isLeft ? "left" : "right",
        }}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  weaponWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  infoWrapper: {
    color: "white",
    fontSize: 15,
    paddingVertical: 10,
  }
});

